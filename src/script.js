import obj from "./user.js";
const { userName, userId } = obj;
const obj_userName = document.getElementById("profile_userName");
const obj_userId = document.getElementById("profile_userId");
obj_userName.innerHTML = userName;
obj_userId.innerHTML = userId;
