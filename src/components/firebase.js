import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const config={
    // apiKey: "AIzaSyBkCEy3DhC-Tuk2F1bXdZXiDIyZWeBQc3Y",
    // authDomain: "trial2-84bbe.firebaseapp.com",
    // projectId: "trial2-84bbe",
    // storageBucket: "trial2-84bbe.appspot.com",
    // messagingSenderId: "198156266673",
    // appId: "1:198156266673:web:a8d0b81b857cbb87d10690",
    // measurementId: "G-T6CP7J80VW"
    //trial1
    // apiKey: "AIzaSyCeQoisAO5ziHbIN0WASHKBfY83qLrbtdM",
    // authDomain: "trial-4cf67.firebaseapp.com",
    // projectId: "trial-4cf67",
    // storageBucket: "trial-4cf67.appspot.com",
    // messagingSenderId: "922147646485",
    // appId: "1:922147646485:web:86f08ce55d22967454721c",
    // measurementId: "G-EVXSX0D29D"
    // // apiKey: "AIzaSyD20RgksV4spJkJPN-3UDg7n_Vodly2ND0",
    // authDomain: "trial3-361b9.firebaseapp.com",
    // projectId: "trial3-361b9",
    // storageBucket: "trial3-361b9.appspot.com",
    // messagingSenderId: "910620409790",
    // appId: "1:910620409790:web:4d889a2a1dbde0f19083ef",
    // measurementId: "G-V73EGSTS5W"
    //collegemail
    apiKey: "AIzaSyBkih8yqqeAD5Sk-PJufyOpwWVq1cE9fKk",
    authDomain: "voting-827db.firebaseapp.com",
    projectId: "voting-827db",
    storageBucket: "voting-827db.appspot.com",
    messagingSenderId: "829392986977",
    appId: "1:829392986977:web:43a937e38e16c937c8db20",
    measurementId: "G-DHW4RLXE3Q"
}
const app=initializeApp(config);
export const auth = getAuth(app); 
// auth.languageCode='it';
//export default app;
