let myAnsverInput = document.getElementById('InputOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedbackOne');




// opgave 1 og 2

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 1 og 2');
    /* din kode her.*/
    console.log('test:  '+document.getElementById('InputOne').value);

    switch (document.getElementById('InputOne').value) {
        case '1':
            console.log("Du har valgt 1");
            answerFeedbackOne.innerText = "Du har valgt 1";
            break;

        case '2':
            console.log("Du har valgt 2");
            answerFeedbackOne.innerText = "Du har valgt 2";
            break;

        case '3':
            console.log("Du har valgt 3");
            answerFeedbackOne.innerText = "Du har valgt 3";
            break;

        case '4':
            console.log("Du har valgt 4");
            answerFeedbackOne.innerText = "Du har valgt 4";
            break;

        case '5':
            console.log("Du har valgt 5");
             myAnsverFeedbackElement.innerText = "Du har valgt 5";
            break;

        default:
            console.log("Ugyldigt valg");
            answerFeedbackOne.innerText = "Ugyldigt valg, skriv et tal mellem 1 og 5";
            break;
    }
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/
function showMessage(message){
    myAnsverFeedbackElement.innerHTML = `<p>${message}</p>`;
}

// opgave 3 og 4
 myAnsverInput = document.getElementById('InputTwo');
 myAnsverButton = document.getElementById('answerButtonTwo');

 myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

 myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
    const value = document.getElementById('InputTwo').value.trim();
    let month = "";
    switch (value) {
        case '1':
            month = "Januar";
            break;
        case '2':
            month = "Februar";
            break;
        case '3':
            month = "Marts";
            break;
        case '4':
            month = "April";
            break;
        case '5':
            month = "Maj";
            break;
        case '6':
            month = "Juni";
            break;
        case '7':
            month = "Juli";
            break;
        case '8':
            month = "August";
            break;
        case '9':
            month = "September";
            break;
        case '10':
            month = "Oktober";
            break;
        case '11':
            month = "November";
            break;
        case '12':
            month = "December";
            break;
        default:
            month = "Ugyldigt valg, skriv et tal mellem 1 og 12";
            break;
    }
    console.log(month);
    showMonth(month);
});

/* din view function her */
function showMonth(month) {
    answerFeedbackTwo.innerText = month;
}


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
function workDays(day) {
    if (!day || typeof day !== 'string') {
        showWorkDays('Du skal indtaste en ugedag.');
        console.log('Du skal indtaste en ugedag.');
        return;
    }
    const input = day.trim().toLowerCase();
    let message = '';
    switch (input) {
        case 'mandag':
        case 'tirsdag':
        case 'onsdag':
        case 'torsdag':
        case 'fredag':
            message = `${day} er en arbejdsdag.`;
            break;
        case 'lørdag':
        case 'søndag':
            message = `${day} er en weekenddag.`;
            break;
        default:
            message = `Ugyldigt input: '${day}'. Skriv en ugedag (mandag-søndag).`;
            break;
    }
    showWorkDays(message);
    console.log(message);
}

/* din view function her */
function showWorkDays(message) {
    myAnsverFeedbackElement.innerText = message;
}
