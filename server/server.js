const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const quizController = require('./quizController.js');

app.use(express.json());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// route handler to send risk assessment results back to client
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// route handlers:
//  will receive the Submit event from the frontend when user completes the quiz
//  and send assessment result back to frontend:
app.post('/', quizController.calculateRisk, (req, res) => {
  res
    .status(200)
    // .redirect('/results');
    .send(res.locals);
});

// serve index.html on all the pages
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

//listen
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
