 var user = prompt('What is your name?');
 console.log("user: " + user);

   alert('Hello, ' + user + ' I am going to ask you a few questions so you can get to know me a little better.');

 var age = prompt(user + ', do you think I look older than 40 years old?').toLowerCase();
 console.log('users age:' + age);

     if (age === 'yes') {
       alert('Gotch ya ' + user + '!  I am 38, almost there.');
     }

     else {
       alert('Thank you ' + user + ', you nailed it.');
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
 console.log('users myDog:' + myDog)

     if (myDog === 'Golden Retriever') {
         alert(user + ', this is getting spooky.  You are amazing.  That is correct.');
     }

       else {
         alert('Negative,' + user + ', Miss Eva is a Golden Retriever.');
       }
