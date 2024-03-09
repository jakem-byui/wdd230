const password1 = document.querySelector("#password");
const password2 = document.querySelector("#reenterPassword");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password1.value !== password2.value) {
		message.textContent = "❗Password does not match. Please try again.";
		message.style.visibility = "show";
		password2.style.backgroundColor = "#fff0f3";
		password2.value = "";
		password2.focus();
	} else {
		message.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
	}
}