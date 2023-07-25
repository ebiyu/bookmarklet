function getId() {
  const url = location.href;
  const m = url.match(
    /https:\/\/www\.amazon\.co\.jp\/.*dp\/([0-9A-Z]{10})\/?/
  );
  if (m) return m[1];

  const m2 = url.match(
    /https:\/\/www\.amazon\.co\.jp\/.*product\/([0-9A-Z]{10})\/?/
  );
  if (m2) return m2[1];
  return null;
}

const url = location.href;

const p = getId();
if (!p) {
  window.alert("Amazonの商品ページではありません");
  return;
}

history.replaceState(null, "", `https://www.amazon.co.jp/dp/${p}/`);

