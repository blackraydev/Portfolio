export default function Validate() {
    const form    = document.querySelector(".reach_out"),
          fio     = document.querySelector(".reach_out .fio"),
          email   = document.querySelector(".reach_out .email"),
          message = document.querySelector(".reach_out .message");

    let [errorFio, errorEmail, errorMessage] = [false, false, false];

    form.addEventListener("submit", (event) => {
        // If "Name" input is empty
        if (!fio.value.trim() && !document.querySelector(".first_input p")) {
            const input      = document.querySelector(".reach_out .first_input");
            const fioWarning = document.createElement("p");

            fio.style.transition = "0.25s ease-in-out";
            fio.style.boxShadow = "0px 0px 5px 2px rgb(200, 40, 70)";

            fioWarning.textContent = "Please enter your name.";

            fioWarning.style.opacity = "0";
            fioWarning.style.transition = "0.25s ease-in-out";
            fioWarning.style.color = "rgb(200, 40, 70)";
            fioWarning.style.position = "absolute";
            fioWarning.style.transform = "translate(15.5px, -25px)";

            setTimeout(() => {
                fioWarning.style.opacity = "1";
            }, 0);

            input.prepend(fioWarning);

            errorFio = true;
        }
        else if (fio.value.trim() && document.querySelector(".first_input p")) {
            let warning = document.querySelector(".first_input p");

            fio.style.boxShadow = "none";
            warning.remove();
            errorFio = false;
        }

        // If "Email" input is empty
        if (!validateEmail(email.value.trim()) && !document.querySelector(".second_input p")) {
            const input        = document.querySelector(".reach_out .second_input");
            const emailWarning = document.createElement("p");

            email.style.transition = "0.25s ease-in-out";
            email.style.boxShadow = "0px 0px 5px 2px rgb(200, 40, 70)";

            emailWarning.textContent = "Please enter your valid email.";

            emailWarning.style.opacity = "0";
            emailWarning.style.transition = "0.25s ease-in-out";
            emailWarning.style.color = "rgb(200, 40, 70)";
            emailWarning.style.position = "absolute";
            emailWarning.style.transform = "translate(15.5px, -25px)";

            setTimeout(() => {
                emailWarning.style.opacity = "1";
            }, 0);

            input.prepend(emailWarning);

            errorEmail = true;
        }
        else if (validateEmail(email.value.trim()) && document.querySelector(".second_input p")) {
            let warning = document.querySelector(".second_input p");

            email.style.boxShadow = "none";
            warning.remove();
            errorEmail = false;
        }

        // If "Message" textarea is empty
        if (!message.value.trim() && !document.querySelector(".textarea p")) {
            const textarea       = document.querySelector(".reach_out .textarea");
            const messageWarning = document.createElement("p");

            message.style.transition = "0.25s ease-in-out";
            message.style.boxShadow = "0px 0px 5px 2px rgb(200, 40, 70)";

            messageWarning.textContent = "Please type a message.";

            messageWarning.style.opacity = "0";
            messageWarning.style.transition = "0.25s ease-in-out";
            messageWarning.style.color = "rgb(200, 40, 70)";
            messageWarning.style.position = "absolute";
            messageWarning.style.transform = "translate(15.5px, -25px)";

            setTimeout(() => {
                messageWarning.style.opacity = "1";
            }, 0);

            textarea.prepend(messageWarning);

            errorMessage = true;
        }
        else if (message.value.trim() && document.querySelector(".textarea p")) {
            let warning = document.querySelector(".textarea p");

            message.style.boxShadow = "none";
            warning.remove();
            errorMessage = false;
        }

        // If at least one of the inputs or textarea is empty, form not submitting data
        if (errorFio || errorEmail || errorMessage) {
            event.preventDefault();
        }
    }, false);
}

function validateEmail(email) {
    let lastAtPos = email.lastIndexOf('@');
    let lastDotPos = email.lastIndexOf('.');

    return (lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2);
}