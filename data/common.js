/*
 * すべての区で共通の設定
 *
 * 時代区分と色。各区のデータファイル（data/<区>.js）の era はこのキーを使います。
 * 区のデータは window.WARDS.<キー> = { label, center, zoom, districts, spots, timeline } の形で登録します。
 */
window.ERAS = {
  ancient:  { label: "原始・古代",        color: "#8d6e63" },
  medieval: { label: "中世",              color: "#5d4037" },
  edo:      { label: "江戸",              color: "#c62828" },
  meiji:    { label: "明治・大正",        color: "#ef6c00" },
  prewar:   { label: "昭和（戦前・戦中）", color: "#558b2f" },
  postwar:  { label: "昭和（戦後）",       color: "#1565c0" },
  modern:   { label: "平成・令和",        color: "#6a1b9a" }
};

window.WARDS = window.WARDS || {};
