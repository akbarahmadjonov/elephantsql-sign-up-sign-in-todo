const form = document.querySelector(".form");
const username = document.querySelector(".reg-username");
const phone = document.querySelector(".reg-phone");
const email = document.querySelector(".reg-email");
const password = document.querySelector(".reg-password");
const eyeShow = document.querySelector(".eye-show");

eyeShow.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch("http://localhost:5000/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: username.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        location.replace("index.html");
      }
    })
    .catch((err) => console.log(err));
});
