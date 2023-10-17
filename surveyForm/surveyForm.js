document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopup");
    const overlay = document.getElementById("overlay");

    submitBtn.addEventListener("click", () => {
        if (form.checkValidity()) {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const gender = Array.from(document.getElementsByName("gender"))
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value)
                .join(", ");
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            document.getElementById("popupFirstName").textContent = firstName;
            document.getElementById("popupLastName").textContent = lastName;
            document.getElementById("popupDOB").textContent = dob;
            document.getElementById("popupCountry").textContent = country;
            document.getElementById("popupGender").textContent = gender;
            document.getElementById("popupProfession").textContent = profession;
            document.getElementById("popupEmail").textContent = email;
            document.getElementById("popupMobile").textContent = mobile;

            popup.style.display = "block";
            overlay.style.display = "block";
            popup.classList.add("fade-in");
        }
    });

    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
        form.reset();
    });

    resetBtn.addEventListener("click", () => {
        form.reset();
    });
});
