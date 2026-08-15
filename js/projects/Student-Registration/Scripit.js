const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");

const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errAge = document.getElementById("errAge");
const errCourse = document.getElementById("errCourse");

const success = document.getElementById("success");

const studentList = document.getElementById("studentList")

const firebaseConfig = {
        apiKey: "AIzaSyDMv8LvzUbGSidxLlcxmCpFwDqeC03hXv8",
        authDomain: "student-registration-5d842.firebaseapp.com",
        databaseURL: "https://student-registration-5d842-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "student-registration-5d842",
        storageBucket: "student-registration-5d842.firebasestorage.app",
        messagingSenderId: "602145757082",
        appId: "1:602145757082:web:ab73582fd146049b584c23"
    };
firebase.initializeApp(firebaseConfig);
console.log(firebase);

const db = firebase.database().ref("Students");

function saveStudentData(){
    
    db.push({
        name: nameInput.value,
        email: emailInput.value,
        age: ageInput.value,
        course:courseInput.value,
    });
}
// to display all registered data
function displayData(){
    studentList.innerHTML = "";

    db.on("value",(snapshot)=>{
        snapshot.forEach((childSnapShot)=>{
            const student = childSnapShot.val();

            const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
            </tr>
            `   
            studentList.innerHTML += row;
        });
    });
}

// Add event listener to prevent page refresh
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("Form Submitted");
    const isValid = validate() ;

    if (isValid) {
        console.log("Validation Success");
        saveStudentData();
        success.textContent = "Student Registered Successfully";
        form.reset();
    }


});


function validate(){
    let isValid = true;
    const ER = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (nameInput.value.trim() == "") {
        errName.textContent = "Name is required";
        isValid = false;
    } else{
        errName.textContent = ""
        // console.log("Name Success");
    }

    if (emailInput.value.trim() == "") { 
        errEmail.textContent = "Email is Required";
        isValid = false;
    } else if (!emailInput.value.match(ER)) {
        errEmail.textContent = "InValid Email";
        isValid = false;
    } else{
        errEmail.textContent = "";
        // console.log("Email Success");
        
    }

    if (ageInput.value == "") {
        errAge.textContent = "Age is Required";
        isValid = false;
    } else if (Number(ageInput.value) < 18) {
        errAge.textContent = "Age must be 18 or above"; 
        isValid = false;
    } else{
        errAge.textContent = ""
        // console.log("Age Success");
    }

    if (courseInput.value.trim() == "") {
        errCourse.textContent = "Course is required";
        isValid = false;
    } else{
        errCourse.textContent = "";
        // console.log("Course Success");
        
    }
    return isValid;
}

displayData();