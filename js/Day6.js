var form = document.getElementById("f1");
var emailid = document.getElementById("email");
var Pass = document.getElementById("pwd");
var button = document.getElementById("submit");
var error_Email = document.getElementById("errEmail");
var error_pwd = document.getElementById("errpwd");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validation(emailid.value, Pass.value);
});

function validation(email,Pass){
    const ER = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const PR = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (email.match(ER)) {
        console.log(`${email}`);
        error_Email.textContent = ""
    } else {
        error_Email.textContent = "Follow this format jhonymech123@gmail.com";
    }
    if (Pass.match(PR)) {
        console.log(`${Pass}`);
        error_pwd.textContent = "";
    } else {
        error_pwd.textContent = "Follow this format Coding@123";
    }
}