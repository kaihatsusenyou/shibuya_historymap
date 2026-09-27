(function () {
  "use strict";

  var ERAS = window.ERAS;
  var SPOTS = window.SPOTS.slice().sort(function (a, b) { return a.year - b.year; });
  var DISTRICTS = window.DISTRICTS || [];

  // 各スポットの地域を area の文字列から決める
  SPOTS.forEach(function (spot) {
    var d = DISTRICTS.filter(function (d) {
      return d.keywords.some(function (k) { return (spot.area || "").indexOf(k) !== -1; });
    })[0];
    spot.district = d ? d.key : "";
  });

  // ---- 地図 ----
  var map = L.map("map", { zoomControl: true }).setView([35.664, 139.698], 14);

  var gsiAttr = '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">国土地理院</a>';

  var baseLayers = {
    "地理院地図（標準）": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
      attribution: gsiAttr, maxZoom: 18
    }),
    "地理院地図（淡色）": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
      attribution: gsiAttr, maxZoom: 18
    }),
    "OpenStreetMap": L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
      maxZoom: 19
    }),
    "現在の航空写真": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
      attribution: gsiAttr, maxZoom: 18
    })
  };
  baseLayers["地理院地図（淡色）"].addTo(map);
  L.control.layers(baseLayers, null, { position: "topright" }).addTo(map);
  L.control.scale({ imperial: false }).addTo(map);

  // 過去の航空写真（国土地理院）。ズーム 10〜17 で提供
  var oldPhotos = {
    usa:   { url: "https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/{z}/{x}/{y}.png", label: "1945〜1950年" },
    old10: { url: "https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png", label: "1961〜1969年" },
    gazo1: { url: "https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg",     label: "1974〜1978年" }
  };
  var oldPhotoLayer = null;
  var oldPhotoSelect = document.getElementById("old-photo");
  var opacityInput = document.getElementById("old-photo-opacity");

  function updateOldPhoto() {
    if (oldPhotoLayer) { map.removeLayer(oldPhotoLayer); oldPhotoLayer = null; }
    var conf = oldPhotos[oldPhotoSelect.value];
    if (!conf) return;
    oldPhotoLayer = L.tileLayer(conf.url, {
      attribution: gsiAttr + "（" + conf.label + "の航空写真）",
      minZoom: 10, maxNativeZoom: 17, maxZoom: 19,
      opacity: opacityInput.value / 100
    }).addTo(map);
  }
  oldPhotoSelect.addEventListener("change", updateOldPhoto);
  opacityInput.addEventListener("input", function () {
    if (oldPhotoLayer) oldPhotoLayer.setOpacity(opacityInput.value / 100);
  });

  // ---- マーカー ----
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function popupHtml(spot) {
    var era = ERAS[spot.era];
    var html = '<div class="popup">' +
      '<span class="era" style="background:' + era.color + '">' + escapeHtml(era.label) + "</span>" +
      (spot.dark ? '<span class="dark-badge">' + escapeHtml(spot.dark) + "</span>" : "") +
      (spot.area ? '<span class="area">' + escapeHtml(spot.area) + "</span>" : "") +
      "<h3>" + escapeHtml(spot.name) + "</h3>" +
      '<div class="year">' + escapeHtml(spot.yearLabel) + "</div>" +
      (spot.wiki ? '<figure class="photo" data-spot="' + escapeHtml(spot.id) + '"></figure>' : "") +
      "<p>" + escapeHtml(spot.detail) + "</p>";
    if (spot.highlights && spot.highlights.length) {
      html += "<h4>見どころ</h4><ul>" + spot.highlights.map(function (h) {
        return "<li>" + escapeHtml(h) + "</li>";
      }).join("") + "</ul>";
    }
    if (spot.sources && spot.sources.length) {
      html += '<h4>参考資料</h4><ul class="sources">' + spot.sources.map(function (src) {
        return '<li><a href="' + escapeHtml(src.url) + '" target="_blank" rel="noopener">' + escapeHtml(src.title) + "</a></li>";
      }).join("") + "</ul>";
    }
    html += '<div class="tags">' + spot.tags.map(function (t) { return "#" + escapeHtml(t); }).join(" ") + "</div>" +
      '<div class="links"><a href="https://www.google.com/maps/search/?api=1&amp;query=' + spot.lat + "," + spot.lng +
      '" target="_blank" rel="noopener">地図アプリで開く</a></div>' +
      "</div>";
    return html;
  }

  // ポップアップの中身はスポットごとに一度だけ作る（写真を読み込んだ後も消えないように）
  function popupElement(spot) {
    var el = document.createElement("div");
    el.innerHTML = popupHtml(spot);
    return el;
  }

  // ---- 写真（Wikipedia の記事に使われているウィキメディア・コモンズの画像） ----
  var photoCache = {};

  function commonsFilePage(url) {
    // .../wikipedia/commons/thumb/a/ab/Name.jpg/320px-Name.jpg → File:Name.jpg
    var m = url.match(/\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/]+)/);
    return m ? "https://commons.wikimedia.org/wiki/File:" + m[1] : null;
  }

  function fetchPhoto(titles) {
    if (!titles.length) return Promise.resolve(null);
    var title = titles[0];
    var url = "https://ja.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title.replace(/ /g, "_"));
    return fetch(url)
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (data) {
        var thumb = data && data.thumbnail && data.thumbnail.source;
        // コモンズの画像（自由に再利用できるもの）だけを使う
        var filePage = thumb && commonsFilePage(thumb);
        if (filePage) {
          return {
            src: thumb,
            filePage: filePage,
            article: (data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page) ||
              "https://ja.wikipedia.org/wiki/" + encodeURIComponent(title)
          };
        }
        return fetchPhoto(titles.slice(1));
      });
  }

  function loadPhoto(spot, container) {
    if (container.getAttribute("data-loaded")) return;
    container.setAttribute("data-loaded", "1");
    if (!photoCache[spot.id]) photoCache[spot.id] = fetchPhoto(spot.wiki);
    container.innerHTML = '<div class="photo-loading">写真を読み込み中…</div>';
    photoCache[spot.id].then(function (photo) {
      if (!photo) { container.remove(); return; }
      container.innerHTML =
        '<a href="' + escapeHtml(photo.filePage) + '" target="_blank" rel="noopener">' +
        '<img src="' + escapeHtml(photo.src) + '" alt="' + escapeHtml(spot.name) + 'の写真" loading="lazy"></a>' +
        '<figcaption>写真：<a href="' + escapeHtml(photo.filePage) + '" target="_blank" rel="noopener">Wikimedia Commons（作者・ライセンス）</a>' +
        '／<a href="' + escapeHtml(photo.article) + '" target="_blank" rel="noopener">Wikipediaで詳しく</a></figcaption>';
      var img = container.querySelector("img");
      img.addEventListener("load", function () { if (popupSpot === spot) markers[spot.id].getPopup().update(); });
      img.addEventListener("error", function () { container.remove(); });
    });
  }

  var popupSpot = null;
  map.on("popupopen", function (e) {
    var el = e.popup.getElement().querySelector(".photo");
    popupSpot = null;
    if (!el) return;
    var spot = SPOTS.filter(function (s) { return s.id === el.getAttribute("data-spot"); })[0];
    if (!spot) return;
    popupSpot = spot;
    loadPhoto(spot, el);
  });
  map.on("popupclose", function () { popupSpot = null; });

  var markerLayer = L.featureGroup().addTo(map);
  var markers = {};
  SPOTS.forEach(function (spot) {
    var icon = L.divIcon({
      className: "",
      html: spot.dark
        ? '<div class="spot-marker dark" style="background:' + ERAS[spot.era].color + '">!</div>'
        : '<div class="spot-marker" style="background:' + ERAS[spot.era].color + '"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -10]
    });
    markers[spot.id] = L.marker([spot.lat, spot.lng], { icon: icon, title: spot.name })
      .bindPopup(popupElement(spot), { maxWidth: 320, autoPanPadding: [20, 20] });
  });

  // ---- 絞り込み ----
  var state = {
    eras: Object.keys(ERAS).reduce(function (o, k) { o[k] = true; return o; }, {}),
    query: "",
    district: "",
    showDark: true,
    onlyDark: false,
    maxYear: Math.max.apply(null, SPOTS.map(function (s) { return s.year; }))
  };

  var eraBox = document.getElementById("era-filters");
  Object.keys(ERAS).forEach(function (key) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "era-chip";
    btn.setAttribute("aria-pressed", "true");
    btn.innerHTML = '<span class="dot" style="background:' + ERAS[key].color + '"></span>' + escapeHtml(ERAS[key].label);
    btn.addEventListener("click", function () {
      state.eras[key] = !state.eras[key];
      btn.setAttribute("aria-pressed", String(state.eras[key]));
      render();
    });
    eraBox.appendChild(btn);
  });

  var slider = document.getElementById("year-slider");
  var yearLabel = document.getElementById("year-label");
  var years = SPOTS.map(function (s) { return s.year; });
  // 縄文など極端に古い年があっても操作しやすいよう、スライダーは「スポットの順番」で動かす
  slider.min = 0;
  slider.max = years.length - 1;
  slider.value = years.length - 1;
  function formatYear(y) { return y < 0 ? "紀元前" + (-y) + "年頃" : y + "年"; }
  slider.addEventListener("input", function () {
    state.maxYear = years[slider.value];
    render();
  });

  document.getElementById("search").addEventListener("input", function (e) {
    state.query = e.target.value.trim().toLowerCase();
    render();
  });

  var districtSelect = document.getElementById("district");
  DISTRICTS.forEach(function (d) {
    var opt = document.createElement("option");
    var n = SPOTS.filter(function (s) { return s.district === d.key; }).length;
    opt.value = d.key;
    opt.textContent = d.label + "（" + n + "）";
    districtSelect.appendChild(opt);
  });
  districtSelect.addEventListener("change", function () {
    state.district = districtSelect.value;
    map.closePopup();
    render();
    // 選んだ地域が見えるように地図を合わせる
    var visible = SPOTS.filter(matches);
    if (visible.length) {
      map.fitBounds(L.latLngBounds(visible.map(function (s) { return [s.lat, s.lng]; })), { padding: [40, 40], maxZoom: 16 });
    }
  });

  var showDark = document.getElementById("show-dark");
  var onlyDark = document.getElementById("only-dark");
  showDark.addEventListener("change", function () {
    state.showDark = showDark.checked;
    if (!showDark.checked) { onlyDark.checked = false; state.onlyDark = false; }
    render();
  });
  onlyDark.addEventListener("change", function () {
    state.onlyDark = onlyDark.checked;
    if (onlyDark.checked) { showDark.checked = true; state.showDark = true; }
    render();
  });

  function matches(spot) {
    if (!state.eras[spot.era]) return false;
    if (state.district && spot.district !== state.district) return false;
    if (spot.dark && !state.showDark) return false;
    if (!spot.dark && state.onlyDark) return false;
    if (spot.year > state.maxYear) return false;
    if (!state.query) return true;
    var hay = [spot.name, spot.area, spot.summary, spot.detail, spot.yearLabel]
      .concat(spot.tags, spot.highlights || [], spot.dark ? [spot.dark, "負の歴史"] : []).join(" ").toLowerCase();
    return hay.indexOf(state.query) !== -1;
  }

  // ---- 一覧 ----
  var list = document.getElementById("spot-list");
  var count = document.getElementById("count");

  function focusSpot(spot) {
    // 絞り込みで非表示のスポットでも、年表などから選ばれたら表示する
    if (!markerLayer.hasLayer(markers[spot.id])) markerLayer.addLayer(markers[spot.id]);
    // 地図の移動が終わってから開かないと、ポップアップが画面外にはみ出すことがある
    map.once("moveend", function () { markers[spot.id].openPopup(); });
    map.setView([spot.lat, spot.lng], Math.max(map.getZoom(), 16));
    if (window.matchMedia("(max-width: 720px)").matches) {
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }
  }

  function render() {
    yearLabel.textContent = "〜" + formatYear(state.maxYear);
    markerLayer.clearLayers();
    list.innerHTML = "";
    var visible = SPOTS.filter(matches);
    visible.forEach(function (spot) {
      markerLayer.addLayer(markers[spot.id]);
      var li = document.createElement("li");
      li.tabIndex = 0;
      li.innerHTML =
        '<span class="bar" style="background:' + ERAS[spot.era].color + '"></span>' +
        "<div><div class=\"name\">" + escapeHtml(spot.name) +
        (spot.dark ? '<span class="dark-label">' + escapeHtml(spot.dark) + "</span>" : "") + "</div>" +
        '<div class="meta">' + escapeHtml(spot.yearLabel) + (spot.area ? "・" + escapeHtml(spot.area) : "") + "</div>" +
        '<div class="meta">' + escapeHtml(spot.summary) + "</div></div>";
      li.addEventListener("click", function () { focusSpot(spot); });
      li.addEventListener("keydown", function (e) { if (e.key === "Enter") focusSpot(spot); });
      list.appendChild(li);
    });
    count.textContent = visible.length + " / " + SPOTS.length + " 件";
  }

  // ---- 年表 ----
  var spotById = {};
  SPOTS.forEach(function (s) { spotById[s.id] = s; });
  var timeline = document.getElementById("timeline");
  (window.TIMELINE || []).slice().sort(function (a, b) { return a.year - b.year; }).forEach(function (ev) {
    var li = document.createElement("li");
    var spot = ev.spot && spotById[ev.spot];
    if (spot) li.style.setProperty("--dot", ERAS[spot.era].color);
    if (ev.dark) li.classList.add("dark");
    li.innerHTML = '<div class="t-year">' + escapeHtml(ev.label) + '</div><div class="t-text">' + escapeHtml(ev.text) + "</div>";
    if (spot) {
      li.classList.add("linked");
      li.tabIndex = 0;
      li.title = spot.name + " を地図で見る";
      li.addEventListener("click", function () { focusSpot(spot); });
      li.addEventListener("keydown", function (e) { if (e.key === "Enter") focusSpot(spot); });
    }
    timeline.appendChild(li);
  });

  // ---- タブ ----
  var tabs = [
    { tab: document.getElementById("tab-spots"), view: document.getElementById("view-spots") },
    { tab: document.getElementById("tab-timeline"), view: document.getElementById("view-timeline") }
  ];
  tabs.forEach(function (t) {
    t.tab.addEventListener("click", function () {
      tabs.forEach(function (o) {
        var on = o === t;
        o.tab.setAttribute("aria-selected", String(on));
        o.view.hidden = !on;
      });
    });
  });

  // ---- スマホ用パネル開閉 ----
  var panel = document.getElementById("panel");
  var toggle = document.getElementById("toggle-panel");
  toggle.addEventListener("click", function () {
    var collapsed = panel.classList.toggle("collapsed");
    toggle.setAttribute("aria-expanded", String(!collapsed));
    setTimeout(function () { map.invalidateSize(); }, 0);
  });

  render();
})();
