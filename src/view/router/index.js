import {Routes,Route} from 'react-router-dom'
import Home from '../screen/Home'
import {menu} from '../data/data'
import '../style/style.css'
import About from '../screen/About';
import Shop from '../screen/Shop';
import HomeScreen from '../screen/HomeScreen';
import Details from '../screen/Details';
import Login from '../screen/Login';
import { useEffect, useState } from 'react';
import Logout from '../screen/Logout';
import Addtocart from '../screen/Addtocart';

function  RouterNav(){
   const [userdata,setUserData] = useState('')

   useEffect(()=>{

    setUserData(localStorage.getItem('user'))

   },[])
   
   console.log(userdata);
    return(
        <>
      {/*   <ul className='menubar'>
           {
            menu.map(d=>{
                return(
                    <li>
                        <a href={d}>{d}</a>
                        </li>
                )
            })
           }
        </ul> */}
            <Routes>
              
               
               
                <Route path='/about' Component={About}/>
                <Route path='/shop' Component={Shop}/>
                <Route path='/details' Component={Details}/>
                <Route path='/logout' Component={Logout}/>
                <Route path='/addtocart' Component={Addtocart}/>
               
               { userdata!==null?<>
                <Route path='/' Component={Home}/>
               </>
               :
                <>
               <Route path='/login' Component={Login}/>
                <Route path='/' Component={Home}/>
                </>
            }
               
            </Routes>
        </>
    )
}
export default RouterNav








































