let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
}

let emailInput = document.getElementById("email");
let newsletterBox = document.querySelector(".newsletter .box");
let errorMessage = document.querySelector(".error-message");

emailInput.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (inputValue == "") {
    newsletterBox.classList.add("error");
    errorMessage.textContent = "O campo não pode ficar vazio";
  } else if (!regex.test(inputValue)) {
    newsletterBox.classList.add("error");
    errorMessage.textContent = "Insira um email no formato nome@gmail.com";
  }
  else {
    newsletterBox.classList.remove("error");
    errorMessage.textContent = "";
  }
})