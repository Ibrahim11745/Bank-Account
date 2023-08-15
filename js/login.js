
//Step-1: Add Event Handler With The Submit Button
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button')

    //Step-2: Get The Gmail Address Inside The Gmail Input Field
    //Always Remember the used .value to get text from Input Field

    const gmailField = document.getElementById('user-gmail');
    const newGmail = gmailField.value;
    //Extra-step--- please your gmail ke display theke remove korbe
    gmailField.value = '';
    // console.log(newGmail);

    //Step-3: get password 
    //Step-3--a: set  id on the html element
    //Step-3--b: get element
    //Step-3--c: get  the .value from the element

    const passwordField = document.getElementById('user-password');
    const newPassword = passwordField.value;
    //Extra-step--- please your gmail ke display theke remove korbe
    passwordField.value = '';
    // console.log(newGmail, newPassword);

    //Danger: do not verify gmail password on the client side
    //step--4: Verify Gmail And Password
    if (newGmail === 'sontan@bap.com' && newPassword === '123456@') {
        // console.log('Valid User')

        //javascript onclick button on go to another html page
        window.location.href = 'bank.html';
    }
    else {
        // console.log('Invalid User')
        alert('Tui password vule gesos toke amara teijjo sontan ghosona korlam');
    }


});