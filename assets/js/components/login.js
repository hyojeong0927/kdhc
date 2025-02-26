document.addEventListener("DOMContentLoaded", function () {
    const idInput = document.getElementById("login-id");
    const idLabel = document.querySelector(".login-id-label");

    const pwInput = document.getElementById("login-pw");
    const pwLabel = document.querySelector(".login-pw-label");

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
});
