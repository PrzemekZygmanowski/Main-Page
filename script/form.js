// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyChLUn63cQUhXp0EkVUbLgCBBmA-BxkIio",
    authDomain: "pz-contactform.firebaseapp.com",
    databaseURL: "https://pz-contactform.firebaseio.com",
    projectId: "pz-contactform",
    storageBucket: "pz-contactform.appspot.com",
    messagingSenderId: "394424620491",
    appId: "1:394424620491:web:200a4e7bec8681a2df124e",
    measurementId: "G-HJ4X395MH0"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Reference messages collection 
let messageRef = firebase.database().ref('messages')

// FORM VARIABLES 
const form = document.getElementById('contactForm'),
    firstName = document.getElementById('fname'),
    lastName = document.getElementById('lname'),
    email = document.getElementById('mail'),
    subject = document.getElementById('subject'),
    submitBtn = document.getElementById('submit'),
    alertMsg = document.querySelector('.alert');


// SUBMIT FORM 
function submitForm(e) {
    e.preventDefault()

    // get values 
    let fname = firstName.value,
        lname = lastName.value,
        mail = email.value,
        message = subject.value;

    // console.log(fname);
    // save message 
    saveMessage(fname, lname, mail, message)

    // show alert 
    alertMsg.style.opacity = '1';

    // hide alert after 3s
    setTimeout(function () {
        alertMsg.style.opacity = '0';
    }, 3000)

    // clear form 
    form.reset()
}

// save message to firebase 
function saveMessage(fname, lname, mail, message) {
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        firstName: fname,
        lastName: lname,
        email: mail,
        message: message
    })
}

// Listen for Form Submit 
form.addEventListener('submit', submitForm)