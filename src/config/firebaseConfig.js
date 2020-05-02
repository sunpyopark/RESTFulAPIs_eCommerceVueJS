import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC2M5cuCX6b_OKYspFctDaBp5cdvrteW9g",
  authDomain: "vuejs-acd7c.firebaseapp.com",
  databaseURL: "https://vuejs-acd7c.firebaseio.com/"
}

firebase.initializeApp(config);


export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

