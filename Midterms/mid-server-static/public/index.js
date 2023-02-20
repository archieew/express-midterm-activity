const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('*');

const port = process.nextTick.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
