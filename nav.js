document.getElementById("btn-menu").addEventListener("click", () => {
    document.getElementById("list-menu").classList.toggle("active");
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6IcB1vuYgSvShJl6r9NYwbL-GbRlG5O0",
  authDomain: "galaxia-astral.firebaseapp.com",
  projectId: "galaxia-astral",
  storageBucket: "galaxia-astral.firebasestorage.app",
  messagingSenderId: "1054342072500",
  appId: "1:1054342072500:web:0ce250a6155024a1bd6fe1",
  measurementId: "G-GGV01N88LQ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const contenedor = document.getElementById("propiedades");

const querySnapshot = await getDocs(collection(db, "propiedades"));

querySnapshot.forEach((doc) => {

  const data = doc.data();

  contenedor.innerHTML += `
  
    <div style="padding:20px;border:1px solid #ccc;margin-bottom:20px;">
    
      <h2>${data.titulo}</h2>
      
      <p>$${data.precio}</p>
      
      <span>${data.ciudad}</span>
      
    </div>
    
  `;
});
