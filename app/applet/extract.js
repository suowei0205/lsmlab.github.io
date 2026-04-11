import fs from 'fs';

const html = fs.readFileSync('/app/applet/pubs.html', 'utf-8');
const regex = /<p>(.*?)<\/p>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(match[1].replace(/<[^>]*>?/gm, ''));
}
