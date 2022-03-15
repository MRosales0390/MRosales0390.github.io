/**************** PRODUCTS ****************/

//Card builder for product presentation
const buildCard = (productId, title, description, photoUrl, price, category, rating, rateCount) => {
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
    cardTitle.innerText = title;
    cardText.innerText = `${description}`;
    cardTextPrice.innerText = `Price: $ ${price}`;
    cardButton.innerText = "Details";
    cardButton.href = `/views/viewProduct.html?productId=${productId}`;
  
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
  const productsUrl = "https://kodecamp2022mr0390-default-rtdb.firebaseio.com/products";

  const createProduct = (title, description, photoUrl, price, category, rating, ratingCount) => {
    const url = productsUrl + ".json";
    
    const product = {
      title: title,
      description: description,      
      imageUrl: photoUrl,
      price: price,
      category: category,
      rating: rating,            
      ratingCount : ratingCount 
    };
  
    let productId = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        productId = product.name;
        window.location.href = `/views/viewProduct.html?productId=${productId}`;
      });
  };

  /*  Get all products from DB  */
  const getAllProducts = () => {
    const url = productsUrl + ".json";
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        for (const key in products) {
          
          const product = products[key];

          if(product !== null){
            const card = buildCard(
              key,
              product.title,
              product.description,
              product.imageUrl,
              product.price,
              product.category,
              product.rating,            
              product.ratingCount              
            );

            mainContent.appendChild(card);
          }
        }
      });
  };

  const getProduct = (id) => {
    const url = productsUrl + `/${productId}.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        const card = buildCard(
          productId,
          product.title,
          product.description,
          product.imageUrl,
          product.price,
          product.category,
          product.rating,
          product.ratingCount
        );
  
        mainContent.appendChild(card);
      });
  };

  const updateProduct = (title, description, price, imageUrl, category, productId) => {
    const url = productsUrl + `/${productId}.json`;
  
    const product = {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      category: category
    };
  
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => {
      if (res.ok) {
        window.location.href = `/views/viewProduct.html?productId=${productId}`;
      } else {
        console.error(res);
      }
    });
  };

  const deleteProduct = (productId) => {
    const url = productsUrl + `/${productId}.json`;
  
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        window.location.href = "/views/productsCatalog.html";
      } else {
        console.error(res);
      }
    });
  };


  /**************** USERS ****************/