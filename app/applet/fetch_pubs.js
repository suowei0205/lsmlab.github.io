import fs from 'fs';

async function fetchPubs() {
  try {
    const res = await fetch('https://www.leshimin.org/Publications.html');
    const text = await res.text();
    fs.writeFileSync('/app/applet/pubs.html', text);
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
}

fetchPubs();
