
const firebaseConfig = {
    apiKey: "AIzaSyAIP52nAPuV5yEnSwRKke-c0LdxlSnNp1k",
    authDomain: "contact-form-610ff.firebaseapp.com",
    databaseURL: "https://contact-form-610ff-default-rtdb.firebaseio.com",
    projectId: "contact-form-610ff",
    storageBucket: "contact-form-610ff.appspot.com",
    messagingSenderId: "561841052998",
    appId: "1:561841052998:web:287fb16ae19d512bf91947"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var review = getElementVal("review");
    var contactformDB = firebase.database().ref(name);
    saveMessages(name, email, review, contactformDB);
  }
  const saveMessages = (name, email, review, contactformDB) => 
  {
    contactformDB.set(
      {
        name: name,
        email: email,
        review: review,
      });
      
    document.getElementById("contactform").reset();
  };
  const getElementVal = (id) => 
  {
    return document.getElementById(id).value;
  };