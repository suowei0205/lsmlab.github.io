import https from 'https';

https.get('https://www.leshimin.org/Publications.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<div class="col-md-9 col-sm-9 col-xs-9">')) {
            console.log(lines[i+1]);
        }
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
