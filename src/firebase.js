// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
const { v4 } = require("uuid");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5PbMNa9Cq7HgFe-HvBU13HIvuckrxWJM",
  authDomain: "crmback-4b65e.firebaseapp.com",
  projectId: "crmback-4b65e",
  storageBucket: "crmback-4b65e.appspot.com",
  messagingSenderId: "292978055447",
  appId: "1:292978055447:web:95e64b6e5a9a78fe8cbf52",
  measurementId: "G-FR36RWBSCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const uploadFile = async (file, ubicacion) => {
  const storageRef = ref(storage, `${ubicacion}/` + v4() + ".jpg");
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return `${url}.jpg`;
};

module.exports = uploadFile;
