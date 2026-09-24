(function () {
  "use strict";

  var ERAS = window.ERAS;
  var SPOTS = window.SPOTS.slice().sort(function (a, b) { return a.year - b.year; });

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
    return '<div class="popup">' +
      '<span class="era" style="background:' + era.color + '">' + escapeHtml(era.label) + "</span>" +
      "<h3>" + escapeHtml(spot.name) + "</h3>" +
      '<div class="year">' + escapeHtml(spot.yearLabel) + "</div>" +
      "<p>" + escapeHtml(spot.detail) + "</p>" +
      '<div class="tags">' + spot.tags.map(function (t) { return "#" + escapeHtml(t); }).join(" ") + "</div>" +
      "</div>";
  }

  var markerLayer = L.featureGroup().addTo(map);
  var markers = {};
  SPOTS.forEach(function (spot) {
    var icon = L.divIcon({
      className: "",
      html: '<div class="spot-marker" style="background:' + ERAS[spot.era].color + '"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -10]
    });
    markers[spot.id] = L.marker([spot.lat, spot.lng], { icon: icon, title: spot.name })
      .bindPopup(popupHtml(spot), { maxWidth: 300 });
  });

  // ---- 絞り込み ----
  var state = {
    eras: Object.keys(ERAS).reduce(function (o, k) { o[k] = true; return o; }, {}),
    query: "",
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

  function matches(spot) {
    if (!state.eras[spot.era]) return false;
    if (spot.year > state.maxYear) return false;
    if (!state.query) return true;
    var hay = [spot.name, spot.summary, spot.detail, spot.yearLabel].concat(spot.tags).join(" ").toLowerCase();
    return hay.indexOf(state.query) !== -1;
  }

  // ---- 一覧 ----
  var list = document.getElementById("spot-list");
  var count = document.getElementById("count");

  function focusSpot(spot) {
    map.setView([spot.lat, spot.lng], Math.max(map.getZoom(), 16));
    markers[spot.id].openPopup();
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
        "<div><div class=\"name\">" + escapeHtml(spot.name) + "</div>" +
        '<div class="meta">' + escapeHtml(spot.yearLabel) + "</div>" +
        '<div class="meta">' + escapeHtml(spot.summary) + "</div></div>";
      li.addEventListener("click", function () { focusSpot(spot); });
      li.addEventListener("keydown", function (e) { if (e.key === "Enter") focusSpot(spot); });
      list.appendChild(li);
    });
    count.textContent = visible.length + " / " + SPOTS.length + " 件";
  }

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
