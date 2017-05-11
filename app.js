 var user = prompt('What is your name?');
 console.log('user: ' + user);

      alert('Hello, ' + user + ', I am going to ask you a few questions so you can get to know me a little better.');

 var age = prompt(user + ', do you think I look older than 40 years old?').toLowerCase();
 console.log('users age:' + age);

    if (age === 'yes') {
      alert('Gotch ya ' + user + '!  I am 38, almost there.');
    }

    else {
      alert('Thank you ' + user + ', I\'m 38.');
    }

 var where = prompt(user + ', guess where I am from?');
 console.log('users where:' + where);

    if (where === 'Illinois') {
      alert('Wow ' + user + ' , you nailed that one!');
    }

    else {
      alert('Not quite, I was born and bred in Illinois');
    }

 var myDog = prompt(user + ', what breed of dog do you think I own?');
 console.log('users myDog:' + myDog);

    if (myDog === 'Golden Retriever') {
      alert(user + ', this is getting spooky.  You are amazing.  That is correct.');
    }

    else {
      alert('Negative, ' + user + ', Miss Eva is a Golden Retriever.');
    }

var myVehicle = prompt(user + ', Y or N, Do you take me as a Truck Guy?').toUpperCase();
console.log('users myVehicle:' + myVehicle);

    if (myVehicle === 'YES' || 'Y') {
      alert('You are correct!');
    }

    else {
      alert('Really ' + user + '!?!?  I thought that should have been an easy one.')
    }


//need to make this stop after 4 tries

var favNum = 13;

for (var i=0; i < 4; i++) {
var answer = prompt('guess my favorite number');

  if (answer < favNum) {
    alert('that is too low, try again');
  } else if (answer > favNum) {
    alert('that is too high, try again');
  } else {
    alert('you guessed it!');
    break;
  }
}


var myStates = ['texas', 'washington', 'illinois', 'colorado'];
var answer = prompt('Okay' + user + ', try to guess a state that I have lived in.');
var flag;

for (var i=0; i < myStates.length; i++) {
  console.log('users myStates:' +  myStates[i]);

  if (answer === myStates[i]) {
    alert('Holy Cow!  You guessed right!');
    flag = true;
    break;
  }
}

  if (!flag) {
    alert('Nope - wrong - Try again.');
  }
