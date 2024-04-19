function lookForDOI() {
  const doiRegexp = /10\.\d{4,9}\/[-._;()/:A-Za-z0-9]+[-_()/:A-Za-z0-9]+/g;

  // first, try to get the doi from the current url
  const m = location.href.match(doiRegexp);
  if (m) {
    return m[0];
  }

  const m2 = document.body.innerText.match(doiRegexp);
  if (m2) {
    return m2[0];
  }

  return null;
}

const doi = lookForDOI();
if (doi) {
  const fixed = window.prompt("Please enter doi", doi);
  if (fixed) {
    window.open("https://api.semanticscholar.org/" + fixed);
  }
} else {
  window.alert("No doi found.");
}
