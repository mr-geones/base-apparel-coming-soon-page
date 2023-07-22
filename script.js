function emailIsValid() {
  const emailadress = document.getElementById("email");
  const form = document.querySelector("form");
  const errorText = document.getElementById("error");
  const timer = 5000;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailadress.value)) {
    emailadress.classList.add("error-icon");
    form.classList.add("error-border");
    errorText.classList.remove("thanks");
    errorText.classList.add("error");
    errorText.innerHTML = "Please provide a valid email";
  } else {
    emailadress.classList.remove("error-icon");
    form.classList.remove("error-border");
    errorText.classList.remove("error");
    errorText.classList.add("thanks");
    errorText.innerHTML = "Thank you for signing up! <br />A confirmation email has been sent to you.";
    setTimeout(() => {
      emailadress.value = "";
      errorText.innerHTML = "";
      errorText.classList.remove("thanks");
    }, timer);
  }
}
