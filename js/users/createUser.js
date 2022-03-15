const getData = () => {
    const usernameElement = document.getElementById("username-input");
    const passwordElement = document.getElementById("password-input");
    const photoUrlElement = document.getElementById("photoUrl-input");
    const emailElement = document.getElementById("email-input");
    const phoneElement = document.getElementById("phoneNumber-input");
  
    const username = usernameElement.value;
    const password = passwordElement.value;
    const photoUrl = photoUrlElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
  
  
    createUser(username, password, photoUrl, email, phone);
  };
  
  const submitBtn = document.getElementById("submit-btn");
  
  submitBtn.addEventListener("click", getData);
  