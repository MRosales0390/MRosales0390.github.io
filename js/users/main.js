/**************** USERS ****************/

//Card builder for product presentation
//createUser(usernameElement, passwordElement, photoUrlElement, emailElement, phoneElement);
const buildCard = (userId, username, photoUrl, email, phone) => {

    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardTextPrice = document.createElement("p");
    let cardButton = document.createElement("a");
  
    // Add classes to elements
    cardContainer.classList.add("card", "custom-card", "m-2");
    cardImage.classList.add("card-img-top", "custom-card-image");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    cardButton.classList.add("btn", "btn-primary", "mt-auto");
  
    // Add values to the elements
    cardImage.src = photoUrl;
    cardTitle.innerText = username;
    cardText.innerText = `Correo electrónico: ${email}`;
    cardTextPrice.innerText = `No. Telefónico: ${phone}`;
    cardButton.innerText = "Detalle";
    cardButton.href = `/views/users/viewUser.html?userId=${userId}`;
  
    // Build structure
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);  
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardTextPrice);
    cardBody.appendChild(cardButton);
  
    return cardContainer;
  };

  let mainContent = document.getElementById("main-content");
  const usersUrl = "https://kodecamp2022mr0390-default-rtdb.firebaseio.com/users";

  // const createUser = (username, password, photoUrl, email, phone)
  const createUser = (username, password, photoUrl, email, phone) => {
    const url = usersUrl + ".json";
    
    const user = {
      username: username,
      password: password,
      photoUrl: photoUrl,
      email: email,
      phone: phone
    };
  
    let userId = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        userId = user.name;
        window.location.href = `/views/users/viewUser.html?userId=${userId}`;
      });
  };

  /*  Get all users from DB  */
  const getAllUsers = () => {
    const url = usersUrl + ".json";
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        for (const key in users) {
          
          const user = users[key];

          if(user !== null){
            const card = buildCard(
              key,
              user.username,
              user.photoUrl,
              user.email,
              user.phone
            );

            mainContent.appendChild(card);
          }
        }
      });
  };

  const getUser = (userId) => {
    const url = usersUrl + `/${userId}.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        const card = buildCard(
          userId,
          user.username,          
          user.photoUrl,
          user.email,
          user.phone
        );
  
        mainContent.appendChild(card);
      });
  };

  const updateUser = (userId, username, password, photoUrl, email, phone) => {
  //updateProduct = (title, description, price, imageUrl, category, productId) => {
    const url = usersUrl + `/${userId}.json`;
  
    const user = {
      username: username,
      password: password,
      photoUrl: photoUrl,
      email: email,
      phone: phone
    };
  
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        window.location.href = `/views/users/viewUser.html?userId=${userId}`;
      } else {
        console.error(res);
      }
    });
  };

  const deleteUser = (userId) => {
    const url = usersUrl + `/${userId}.json`;
  
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        window.location.href = "/views/users/usersList.html";
      } else {
        console.error(res);
      }
    });
  };


  /**************** USERS ****************/