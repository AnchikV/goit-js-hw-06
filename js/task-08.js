const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((name, value) => {
        //console.log('onFormSubmit -> name', name);
        //console.log('onFormSubmit -> value', value);
    });

    if (email.value === "" || password.value === "") {
        alert("Fill all fields on the form");
    }
    else {
        //alert("The form has been submitted")
        const message = {
        email: email.value,
        password: password.value,
    };
    console.log(message);
        //console.log(`The form has email ${email.value} and password ${password.value}`);
        loginForm.reset();
       }
};

