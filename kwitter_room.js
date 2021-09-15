
//ADD YOUR FIREBASE LINKS HERE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyC1ElHYTE4VBls9sEBm7YtGdg2pLtPs5OY",
      authDomain: "kwitter-c36f0.firebaseapp.com",
      databaseURL: "https://kwitter-c36f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-c36f0",
      storageBucket: "kwitter-c36f0.appspot.com",
      messagingSenderId: "1064987014967",
      appId: "1:1064987014967:web:bfc1c513a6d21492160cb2",
      measurementId: "G-GJ8Y0YD3B2"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
