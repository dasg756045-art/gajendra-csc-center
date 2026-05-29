import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


/* FIREBASE CONFIG */

const firebaseConfig = {

apiKey: "AIzaSyBo39Fun9y55dbA2Xh_n645BVss4Gsu3PQ",

authDomain: "gajendra-csc-new.firebaseapp.com",

projectId: "gajendra-csc-new",

storageBucket: "gajendra-csc-new.appspot.com",

messagingSenderId: "5792307852",

appId: "1:5792307852:web:bc0c478b6cb2a69179f9a9"

};


/* INITIALIZE */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


/* REGISTER */

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("registerName").value;

const mobile =
document.getElementById("registerMobile").value;

const password =
document.getElementById("registerPassword").value;

const fakeEmail =
mobile + "@gajendra.com";

createUserWithEmailAndPassword(
auth,
fakeEmail,
password
)

.then(()=>{

/* SAVE USER */

localStorage.setItem(
"userName",
name
);

localStorage.setItem(
"userMobile",
mobile
);

/* SHOW PROFILE */

showProfile(name,mobile);

alert("Registration Successful");

/* CLOSE POPUP */

document.getElementById(
"registerPopup"
).style.display = "none";

})

.catch((error)=>{

alert(error.message);

});

});

}


/* LOGIN */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const mobile =
document.getElementById("loginMobile").value;

const password =
document.getElementById("loginPassword").value;

const fakeEmail =
mobile + "@gajendra.com";

signInWithEmailAndPassword(
auth,
fakeEmail,
password
)

.then(()=>{

let savedName =
localStorage.getItem("userName");

let savedMobile =
localStorage.getItem("userMobile");

/* AGAR NAME NA MILE */

if(!savedName){

savedName = "User";

}

if(!savedMobile){

savedMobile = mobile;

}

/* SHOW PROFILE */

showProfile(
savedName,
savedMobile
);

alert("Login Successful");

/* CLOSE POPUP */

document.getElementById(
"loginPopup"
).style.display = "none";

})

.catch((error)=>{

alert(error.message);

});

});

}


/* SHOW PROFILE */

function showProfile(name,mobile){

/* HIDE BUTTONS */

document.querySelector(".login-btn")
.style.display = "none";

document.querySelector(".register-btn")
.style.display = "none";

/* SHOW PROFILE BOX */

document.getElementById(
"profileBox"
).style.display = "flex";

/* SET DATA */

document.getElementById(
"profileName"
).innerText =
name || "User";

document.getElementById(
"profileMobile"
).innerText =
mobile || "";

document.getElementById(
"profileLogo"
).innerText =
(name || "U").charAt(0);

}


/* AUTO LOGIN */

window.addEventListener("load",()=>{

const savedName =
localStorage.getItem("userName");

const savedMobile =
localStorage.getItem("userMobile");

if(savedName && savedMobile){

showProfile(
savedName,
savedMobile
);

}

});


/* LOGOUT */

const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

signOut(auth)

.then(()=>{

localStorage.clear();

location.reload();

});

});

}