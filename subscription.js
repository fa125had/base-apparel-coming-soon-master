const mailValidator = () => {
    const validRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const userEmail = document.forms['subscriptionForm']['usermail'].value;
    const errorMessageContainer = document.getElementsByClassName('submitMessage')[0];
    const errorMessageText = document.getElementById('submitMessage');
    const errorIcon = document.getElementById('errorIcon');
    const mq = window.matchMedia('(min-width: 800px)');

    if (userEmail.match(validRegx)) {
        errorMessageText.style.color = 'green';
        errorMessageText.innerHTML = 'Thank you!';
        errorIcon.style.display = 'none';
        return false;
    } else {
        errorMessageContainer.style.display = 'block';
        errorMessageText.style.color = 'red';
        errorMessageText.innerHTML = 'Please provide a valid email';
        errorIcon.style.display = 'block';
        return false;
    }

};