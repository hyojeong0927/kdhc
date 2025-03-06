document.addEventListener("DOMContentLoaded", function () {
    const idInput = document.getElementById("login-id");
    const idLabel = document.querySelector(".login-id-label");

    const pwInput = document.getElementById("login-pw");
    const pwLabel = document.querySelector(".login-pw-label");

    const pwInputNew = document.getElementById("login-pw-new");
    const pwLabelNew = document.querySelector(".login-pw-new");

    const pwInputOk = document.getElementById("login-pw-ok");
    const pwLabelOk = document.querySelector(".login-pw-ok");
    

    function handleFocus(label) {
        label.classList.add("hidden-label");
    }

    function handleBlur(input, label) {
        if (input.value.trim() === "") {
            label.classList.remove("hidden-label");
        }
    }

    idInput.addEventListener("focus", () => handleFocus(idLabel));
    idInput.addEventListener("blur", () => handleBlur(idInput, idLabel));

    pwInput.addEventListener("focus", () => handleFocus(pwLabel));
    pwInput.addEventListener("blur", () => handleBlur(pwInput, pwLabel));

    pwInputNew.addEventListener("focus", () => handleFocus(pwLabelNew));
    pwInputNew.addEventListener("blur", () => handleBlur(pwInputNew, pwLabelNew));

    pwInputOk.addEventListener("focus", () => handleFocus(pwLabelOk));    
    pwInputOk.addEventListener("blur", () => handleBlur(pwInputOk, pwLabelOk));
});
