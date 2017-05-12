'use strict';

function askYNQuestion(qArr, corrArr, corrResp, incoResp){
  var userAnsReturn = [];
  var correctAnswers = 0;
  for (var i=0; i<qArr.length; i++){
    do{
      var userAnswer = prompt(qArr[i]).toUpperCase();

      if (userAnswer !== 'Y' && userAnswer !== 'YES' && userAnswer !== 'N' && userAnswer !== 'NO'){
        alert('Please respond only with a yes or no.');
      } else if (userAnswer === corrArr[0][i] || userAnswer === corrArr[1][i]){
        alert(corrResp[i]);
        correctAnswers++;
      } else {
        alert(incoResp[i]);
      }
    } while (userAnswer !== 'YES' && userAnswer !== 'Y' && userAnswer !== 'NO' && userAnswer !== 'N');
    console.log('User Answer: ', userAnswer);
    userAnsReturn.push(userAnswer);
  }
  alert('You answered ' + correctAnswers + ' out of ' + qArr.length + ' correctly!');
  return userAnsReturn;
}

var userName = prompt('What is your name?');
console.log("user: " + userName);

alert('Hello, ' + userName + ' I am going to ask you a few questions so you can get to know me a little better.');

var questionArray = [userName + ', do you think I look older than 40 years old?', 'Do you think I\'m from Seattle?', 'Do I have a Golden Retriever?'];
var correctAnswerArray = [['N', 'N', 'Y'],['NO', 'NO', 'YES']];
var correctResponseArray = ['Thank you ' + userName + ', you nailed it.', 'You\'re right! I was born and bred in Illinois', 'You\'re right ' + userName + '!  Miss Eva is a Golden Retriever.'];
var incorrectResponseArray = ['Gotch ya ' + userName + '!  I am 38, almost there.', 'Nope, I was born and bred in Illinois', 'Negative, ' + userName + ', Miss Eva actually is a Golden Retriever.'];

var hopeThisWorks = askYNQuestion(questionArray, correctAnswerArray, correctResponseArray, incorrectResponseArray);
console.log(hopeThisWorks.join(', '));
