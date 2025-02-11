const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

const dailyNote = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;

location.href = `https://scrapbox.io/<set-url>/${dailyNote}`;

