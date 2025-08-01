const url = location.href;
const title = document.title;
navigator.clipboard.writeText(`[${title}](${url})`);
window.alert('Link copied to clipboard.');
