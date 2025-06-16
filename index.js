// Clearing out the input fields on clicking the submit button
document.querySelector(".submit-button").onclick = function() {submitForm()};

const submitForm = () => {
    document.getElementById("name-input").value = ""
    document.getElementById("email-input").value = ""
}