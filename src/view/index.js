import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import RouterNav from './router';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import Header from './component/Header';
function App(){
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