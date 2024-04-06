import {Routes,Route} from 'react-router-dom'
import Home from '../screen/Home'
import {menu} from '../data/data'
import '../style/style.css'
import About from '../screen/About';
import Shop from '../screen/Shop';
import HomeScreen from '../screen/HomeScreen';
import Details from '../screen/Details';

function  RouterNav(){
   
    console.log(menu);
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
              
                <Route path='/' Component={Home}/>
                <Route path='/home' Component={HomeScreen}/>
                <Route path='/about' Component={About}/>
                <Route path='/shop' Component={Shop}/>
                <Route path='/details' Component={Details}/>
               
            </Routes>
        </>
    )
}
export default RouterNav








































