import firebase from 'firebase';     //FIREBASE TOOLS ARE ALREADY PRESENT IN OUR NPM PACKAGE			

var config = 
	{
    apiKey: "AIzaSyAXLtnpahanFOITjNVctXcR9rsI_lhfRB4",
    authDomain: "chaton-live.firebaseapp.com",
    databaseURL: "https://chaton-live.firebaseio.com",
    projectId: "chaton-live",
    storageBucket: "chaton-live.appspot.com",
    messagingSenderId: "973013806938"
  	};

  	var fire=firebase.initializeApp(config);	//doubt 1					

export default fire;