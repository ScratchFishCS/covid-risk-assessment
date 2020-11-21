const path = require('path');
const quizController = {};

const riskFactor = {
  mail: 1,
  takeout: 1,
  gas: 1,
  tennis: 1,
  camp: 1,
  grocery: 2,
  walk: 2,
  restaurantOut: 2,
  doctor: 2,
  downtown: 2,
  house: 3,
  bbq: 3,
  mall: 3,
  kids: 3,
  elderly: 3,
  hair: 4,
  restaurantIn: 4,
  plane: 4,
  wedding: 4,
  hug: 4,
  gym: 5,
  movie: 5,
  music: 5,
  religious: 5,
  bar: 5,
}

const risk = {
  1: 'low',
  2: 'lowMod',
  3: 'mod',
  4: 'modHigh',
  5: 'high',
}

quizController.calculateRisk = (req, res, next) => {
  // algorithm for calculating risk goes here
    // iterate over req.body.activities
    // check if activity against our activity lookup object for the activity's risk value
    // assign the activities to the risk
    // assign maxNum to highest risk activity

  // if this activity, look in riskFactor object for its value
  // example: [mail, gas, grocery, hair, plane]
  const acts = req.body.activities;
  console.log(req.body.activities);
  let max = 0;
  let maxRisk;  
  let maxArray;
  // let riskLevel;
    
  // i = 0: riskFactor[mail] = 1, 1 > 0, make max = 1, maxArray = [mail] 
  // i = 1: riskFactor[gas] = 1, 1 > 1 -> NO, go to else if. 1 === 1 -> YES!, maxArray = [mail, gas]
  // i = 2: riskFactor[grocery] = 2, 2 > 1 -> YES!, make max = 2, maxArray = [grocery]
  // i = 3: riskFactor[hair] =  4, 4 > 2 -> YES!, make max = 4, maxArray = [hair]
  // i = 4; riskFactor[plane] = 4, 4 > 1 -> NO, go to else if. 4 === 4 -> YES!, maxArray = [hair, plane]
    
  for (let i = 0; i < acts.length; i += 1) {
    if (riskFactor[acts[i]] > max) {
      max = riskFactor[acts[i]];
      maxRisk = risk[max];
      maxArray = [acts[i]];
    } else if (riskFactor[acts[i]] === max) {
      maxArray.push(acts[i]);
    }
  }
  
  res.locals.activities = {
    riskLevel: maxRisk,
    riskyActs: maxArray
  }

  return next();
}

module.exports = quizController;