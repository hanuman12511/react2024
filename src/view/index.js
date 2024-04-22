import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import RouterNav from './router';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import Header from './component/Header';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc ,getDocs} from "firebase/firestore"; 
import { useEffect, useState } from 'react';
function App(){
    const [db1 ,setDb] = useState('')
    useEffect(()=>{
        const firebaseConfig = {
          apiKey: "AIzaSyAuSazLAGreR3_MQ_9b24LAnoFnIH7eBQ4",
          authDomain: "reactjs-9a5ff.firebaseapp.com",
          projectId: "reactjs-9a5ff",
          storageBucket: "reactjs-9a5ff.appspot.com",
          messagingSenderId: "711876869856",
          appId: "1:711876869856:web:fe2c67befa29bd99f05a85",
          measurementId: "G-FE0GDNFJ9W"
        };
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        console.log("app=",app);
        console.log(analytics);
        const db = getFirestore(app);
        console.log(db);
        //setDb(db)
        reactData(db)
    },[])

    async function reactData(db){
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });

    }

    async function addData(){
        try {
            const docRef = await addDoc(collection(db1, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

     
        }
    return(
        <BrowserRouter>
       {/*  <Header/> */}
      <HeaderComponent/> 
            <RouterNav/>
           <FooterComponent/>
        </BrowserRouter>

    )
}
export default App