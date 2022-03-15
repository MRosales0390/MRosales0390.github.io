const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

const usernameElement = document.getElementById("username-input");
const passwordElement = document.getElementById("password-input");
const photoUrlElement = document.getElementById("photoUrl-input");
const emailElement = document.getElementById("email-input");
const phoneElement = document.getElementById("phoneNumber-input");

const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");

const getData = () => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  const photoUrl = photoUrlElement.value;
  const email = emailElement.value;
  const phone = phoneElement.value;

  updateUser(userId, username, password, photoUrl, email, phone);
};

submitBtn.addEventListener("click", getData);
cancelBtn.onclick = function() { 
  window.location.href = `/views/users/viewUser.html?userId=${userId}`;
};

const placeUserData = () => {
  const url = `https://kodecamp2022mr0390-default-rtdb.firebaseio.com/users/${userId}.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      usernameElement.value = user.username;
      passwordElement.value = user.password;
      photoUrlElement.value = user.photoUrl;
      emailElement.value = user.email;
      phoneElement.value = user.phone;
    });
};

placeUserData();
