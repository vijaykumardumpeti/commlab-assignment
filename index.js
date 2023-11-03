let isPopupClicked = false;

function togglePopup() {
    const popup = document.getElementById("popup-modal");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

const button1 = document.getElementById("cta-button");
const button2 = document.getElementById("cta-button-2");
const button3 = document.getElementById("cta-button-3");

button1.addEventListener("click", function() {
    isPopupClicked = true;
    togglePopup();
});

button2.addEventListener("click", function() {
    isPopupClicked = true;
    togglePopup();
});

button3.addEventListener("click", function() {
    isPopupClicked = true;
    togglePopup();
});

const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function() {
    isPopupClicked = false;
    togglePopup();
});


const submitButton = document.getElementById("submitButton").addEventListener("click", function(e) {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    /*submit details*/
    if (lastName.value !== "" && firstName.value !== "" && email.value !== "" && phone.value !== "") {
        e.preventDefault();
        isPopupClicked = false;
        togglePopup();

        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
    }
});