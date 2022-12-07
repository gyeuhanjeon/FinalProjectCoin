//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/storage';
import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
//전규한 파이어 베이스
// const firebaseConfig = {
//   apiKey: "AIzaSyBurxEEhA3aHtbt_ZmuiidIO1DN4zttzoc",
//   authDomain: "firstproject-4d0dc.firebaseapp.com",
//   projectId: "firstproject-4d0dc",
//   storageBucket: "firstproject-4d0dc.appspot.com",
//   messagingSenderId: "937511952405",
//   appId: "1:937511952405:web:dfe14a8e01e9a5edeb6e1c",
//   measurementId: "G-H66KBPYK5D"
// };



//민형님 파이어 베이스
const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyCmz_ZlEhqdw-65Yuw6778InG-HbtBB3io",
  authDomain: "isour-c9756.firebaseapp.com",
  databaseURL: "https://isour-c9756-default-rtdb.firebaseio.com",
  projectId: "isour-c9756",
  storageBucket: "isour-c9756.appspot.com",
  messagingSenderId: "1077838894993",
  appId: "1:1077838894993:web:4c88b2cb105722fe642c30",
  measurementId: "G-LEHTB63R1J"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  }).catch((error) => {
    console.log(error);
  })
};


// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export default { firestore };

firebase.initializeApp(firebaseConfig);
// getAnalytics(app);
// const storage = getStorage(app);
// export {storage};
// export const db = getDatabase(app);
//  export const db = getFirestore();