// preprocess
let url = location.href;
url = shortenAmazon(url);
url = shortenMonotaro(url);
url = removeHash(url);
history.replaceState("", document.title, url);

// main
if (window.confirm("Markdown?")) {
    copyMarkdownToClipboard()
    window.alert("Markdown link copied")
} else {
    copyURLWithTitleToClipboard()
    window.alert("Title and URL copied")
}
// end of main

function shortenAmazon(url) {
    const m = url.match(/https:\/\/www\.amazon\.co\.jp\/.*(dp|product)\/([0-9A-Z]{10})\/?/);
    if (!m) return url;
    const p = m[2];

    return `https://www.amazon.co.jp/dp/${p}/`;
}

function shortenMonotaro(url) {
    const m = url.match(/https:\/\/www\.monotaro\.com\/g\/([0-9]+)\//);
    if (!m) return url;

    return m[0];
}

function removeHash(url) {
    const excludeDomain = [
        "github.com",
    ];

    console.log({url})
    
    const urlObj = new URL(url);
    console.log({hostname: urlObj.hostname})
    console.log({excludeDomain})
    console.log(excludeDomain.includes(urlObj.hostname));
    if (excludeDomain.includes(urlObj.hostname)) {
        return url;
    }

    urlObj.hash = '';
    return urlObj.toString();
}

function copyURLWithTitleToClipboard() {
    const url = location.href;
    const title = document.title;
    navigator.clipboard.writeText(`${title} ${url}`);
}



function copyMarkdownToClipboard() {
    const url = location.href;
    const title = document.title;
    navigator.clipboard.writeText(`[${title}](${url})`);
}

