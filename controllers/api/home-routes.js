router.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Tech-Blog</title>
      </head>
      <body>
        <div>${some_data}</div>
      </body>
      </html>
    `);
  });