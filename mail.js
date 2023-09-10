document.addEventListener("DOMContentLoaded", function () {
const firebaseConfig = {
    apiKey: "AIzaSyCfyX3cyCDc4ortA9shC9hGYfmgUBN2xGA",
    authDomain: "personal-portfolio-56ae8.firebaseapp.com",
    databaseURL: "https://personal-portfolio-56ae8-default-rtdb.firebaseio.com",
    projectId: "personal-portfolio-56ae8",
    storageBucket: "personal-portfolio-56ae8.appspot.com",
    messagingSenderId: "183794897353",
    appId: "1:183794897353:web:87d8618eaddda19bc5d818",
    measurementId: "G-KF7D5G8Y64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var mobile = getElementVal("mobile");
    var emailsub = getElementVal("emailsub");
    var msg = getElementVal("msg");

    console.log("Data to be saved to Firebase:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Email Subject:", emailsub);
    console.log("Message:", msg);

    saveMessages(name, email, mobile, emailsub, msg);

    //  enable alert
    document.querySelector(".alert").style.display = "block";

    //  remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //  reset the form
    document.getElementById("contactForm").reset(); 
}

const saveMessages = (name, email, mobile, emailsub, msg) => {
    var newcontactForm = contactFormDB.push();

    newcontactForm.set({
        name: name,
        email: email,
        mobile: mobile,
        emailsub: emailsub,
        msg: msg,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
});