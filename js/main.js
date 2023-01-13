const localData = localStorage.getItem("token");
console.log(localData);

if (!localData) {
  location.replace("login.html");
}
