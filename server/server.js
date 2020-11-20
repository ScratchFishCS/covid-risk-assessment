const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// handle post get hre:

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on all the pages
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

//listen
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
