const url = location.href;

const m = url.match(
  /^https:\/\/akizukidenshi\.com\/catalog\/g\/g[A-Z]-[0-9]{5}/
);

if (m) {
  const newUrl = url.replace(
    /^https:\/\/akizukidenshi\.com\/catalog\/g\/g([A-Z])-([0-9]{5})/,
    "https://akizukidenshi.com/catalog/g/g1$2"
  );
  location.href = newUrl;
}
