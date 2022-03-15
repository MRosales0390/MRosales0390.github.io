const params = new URLSearchParams(window.location.search);

const productId = params.get("productId");
const deleteBtn = document.getElementById("btn-delete");
const editBtn = document.getElementById("btn-edit");

getProduct(productId);

deleteBtn.addEventListener("click", () => {
  deleteProduct(productId);
});

editBtn.addEventListener("click", () => {
  window.location.href = `/views/updateProduct.html?productId=${productId}`;
});
