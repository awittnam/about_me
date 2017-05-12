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

/*
function firstQuestion(){
  do{
  var age = prompt(user + ', do you think I look older than 40 years old?').toLowerCase();
  console.log('users age:' + age);
  if (age === 'yes' || age === 'y') {
    alert('Gotch ya ' + user + '!  I am 38, almost there.');
  } else if (age === 'no' || age ===  'n'){
    alert('Thank you ' + user + ', you nailed it.');
  } else {
    alert('That\'s not yes or no.');
  }
 }while(age !== 'yes' && age !== 'y' && age !== 'no' && age!== 'n');
}

function secondQuestion(){
  var where = prompt(user + ', guess where I am from?').toLowerCase();
  console.log('users where:' + where);
  if (where === 'illinois') {
    alert('Wow ' + user + ' , you nailed that one!');
  } else {
    alert('Not quite, I was born and bred in Illinois');
  }
}

function thirdQuestion(){
  var myDog = prompt(user + ', what breed of dog do you think I own?').toLowerCase();
  console.log('users myDog:' + myDog)
  if (myDog === 'golden retriever') {
    alert(user + ', this is getting spooky.  You are amazing.  That is correct.');
  } else {
    alert('Negative,' + user + ', Miss Eva is a Golden Retriever.');
  }
}

firstQuestion();
secondQuestion();
thirdQuestion();
*/
