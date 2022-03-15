const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

const titleElement = document.getElementById("title-input");
const descriptionElement = document.getElementById("description-input");
const photoUrlElement = document.getElementById("photo-input");
const priceElement = document.getElementById("price-input");
const categoryElement = document.getElementById("category-input");

const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");

const getData = () => {
  const title = titleElement.value;
  const description = descriptionElement.value;
  const photoUrl = photoUrlElement.value;
  const price = priceElement.value;
  const category = categoryElement.value;

  updateProduct(title, description, price, photoUrl, category, productId);
};

submitBtn.addEventListener("click", getData);
cancelBtn.onclick = function() { 
  window.location.href = `/views/viewProduct.html?productId=${productId}`;
};


const placeProductData = () => {
  const url = `https://kodecamp2022mr0390-default-rtdb.firebaseio.com/products/${productId}.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      titleElement.value = product.title;
      descriptionElement.value = product.description;
      photoUrlElement.value = product.imageUrl;
      priceElement.value = product.price;
      categoryElement.value = product.category;
    });
};

placeProductData();
