const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on all the pages
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// route handlers:
//  will receive the Submit event from the frontend when user completes the quiz:
app.post('/', quizController.getResponse, quizController.calculateRisk, (req, res) => {
  res.status(200)
    .redirect('/results');
});

// route handler to send risk assessment results back to client
// app.get('/results', quizController.sendResult, (req, res) => {
//   res.status(200)
//     .send(somethinggoeshere);
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