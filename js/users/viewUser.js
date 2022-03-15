const params = new URLSearchParams(window.location.search);

const userId = params.get("userId");
const deleteBtn = document.getElementById("btn-delete");
const editBtn = document.getElementById("btn-edit");

getUser(userId);

deleteBtn.addEventListener("click", () => {
  deleteUser(userId);
});

editBtn.addEventListener("click", () => {
  window.location.href = `/views/users/updateUser.html?userId=${userId}`;
});
