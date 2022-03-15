const getData = () => {
    const titleElement = document.getElementById("title-input");
    const descriptionElement = document.getElementById("description-input");
    const photoUrlElement = document.getElementById("photo-input");
    const priceElement = document.getElementById("price-input");
    const categoryElement = document.getElementById("category-input");
  
    const title = titleElement.value;
    const description = descriptionElement.value;
    const photoUrl = photoUrlElement.value;
    const price = priceElement.value;
    const category = categoryElement.value;
  
    createProduct(title, description, photoUrl, price, category, null, null);
  };
  
  const submitBtn = document.getElementById("submit-btn");
  
  submitBtn.addEventListener("click", getData);
  