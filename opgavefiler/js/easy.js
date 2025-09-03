let myAnsverInput = document.getElementById('answerOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedback');




// opgave 1 og 2

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 1 og 2');
    /* din kode her.*/
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/



// opgave 3 og 4
 myAnsverInput = document.getElementById('answerTwo');
 myAnsverButton = document.getElementById('answerButtonTwo');

 myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

 myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
});

/* din view function her */


// opgave 5
myAnsverInput = document.getElementById('InputFive');
myAnsverButton = document.getElementById('answerButtonFive');

myAnsverFeedbackElement = document.getElementById('answerFeedbackFive');

myAnsverButton.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnsverInput.value)
  
});


 /* din kode her.*/



/* din view function her */


