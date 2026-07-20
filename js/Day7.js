var form = document.getElementById("f1");
var email = document.getElementById("email");
var pass = document.getElementById("pwd");
var errEmail = document.getElementById("errEmail");
var errpwd = document.getElementById("errpwd");

// Code for Firebase Database

function FDB(email, pass){
    const firebaseConfig = {
        apiKey: "AIzaSyBUK6agdQGak3R1sjDoawfZg0Yne8hkJWM",
        authDomain: "formvalidation-365f7.firebaseapp.com",
        databaseURL: "https://formvalidation-365f7-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "formvalidation-365f7",
        storageBucket: "formvalidation-365f7.firebasestorage.app",
        messagingSenderId: "290305006716",
        appId: "1:290305006716:web:b6d5917f6cfa59a7c17df9"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database().ref("ReqForm");
    db.push({
      email: email,
      password: pass,
    });
}
// Advance Validation only for User Experience in Email
  email.addEventListener("input", (e)=>{
    // console.log(e.target.value);
    const ER = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (e.target.value == "") {
        errEmail.textContent = "Required"
    } else if(!e.target.value.match(ER)) {
        errEmail.textContent = "Try using this Format usename@gmil.com"
    } else{
        errEmail.textContent = ""
    }
});

// Advance Validation only for User Experience in Password
pass.addEventListener("input",(e)=>{
    // console.log(e.target.value);
    const PR = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const APR = /(?=.*?[A-Z])/
    const SPR = /(?=.*?[a-z])/
    const NPR = /(?=.*?[0-9])/
    const CPR = /(?=.*?[#?!@$%^&*-])/
    const DPR = /.{8,}/;
    if (e.target.value == "") {
        errpwd.textContent = "Required";
    }  else if (!e.target.value.match(APR)){
        errpwd.textContent = "Use atleast one upper case";
        pass.style.border = "green"
    }  else if (!e.target.value.match(SPR)){
        errpwd.textContent = "Use atleast one Lower case";
    } else if (!e.target.value.match(NPR)){
        errpwd.textContent = "Use atleast one number 0-9 case";
    } else if (!e.target.value.match(CPR)){
        errpwd.textContent = "Use atleast one Special Character case";
    } else if (!e.target.value.match(DPR)){
        errpwd.textContent = "Use atleast Eight Character";
    } else if (!e.target.value.match(PR)){
        errpwd.textContent = "Try using this Format User@123";
    } else{
        errpwd.textContent = "";
    }
});

// Accesing the advance validation

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var valid = validation(email.value, pass.value)
    
    if(valid){
        FDB(email.value,pass.value);
        console.log("Data send to DB");
        
    }
    
});

// Advance Validation using RegEx(Regular Expression)
function validation(email,pass){
    const ER = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const PR = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const valid =true
    
    if (email.match(ER)) {
        console.log(`${email}`);
        errEmail.textContent = ""
    } else {
        errEmail.textContent = "Follow this format jhonymech123@gmail.com";
        valid = false;
    }
    if (pass.match(PR)) {
        console.log(`${pass}`);
        errpwd.textContent = "";
    } else {
        errpwd.textContent = "Follow this format Coding@123";
        valid = false;
    }

    return valid;
}