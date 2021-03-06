import React,{Component} from 'react';
import About from './Iconimages/About.jpg';
import BBS from './Iconimages/BBS.jpg';
import Management from './Iconimages/Management.jpg';
import Safety from './Iconimages/Safety.png';
import Training from './Iconimages/Training.jpg';
import Softwares from './Iconimages/Softwares.png';
import backgroundimage from './Iconimages/backgroundimage.jpg';
import light from './Iconimages/light.png';
import './Icons.css';
import './Image.css';


class Icons extends Component
{
  
render()
{
return( 

<div style={{ backgroundImage:"url("+light+")",   height:"600px"}}>



<div className="row " >
  <div className="col-6 col-sm-4 mt-4" >
  <div className="container">
  <img className="image ml-5 " src={About}  alt="About" />
  <div className="overlay">
  <div className="text">About Company</div>
  </div>
</div>
 </div>

  

  <div className="col-6 col-sm-4 mt-4">
  <div className="container">
  <img  className="image ml-5" src={Management}  alt="Management"   />
  <div className="overlay">
    <div className="text">  Management Systems Consultancy </div>
  </div>
  </div>
  </div>

  <div className="col-6 col-sm-4 mt-4">
  <div className="container">
  <img  className="image ml-5" src={Safety}  alt="Safety"   />
  <div className="overlay">
    <div className="text">Process Safety Consultancy Services</div>
    </div>
  </div>
  </div>
  </div>
  


  <div className="row mt-3">

  <div className="col-6 col-sm-4">
  <div className="container">
  <img className="image ml-5 mt-3" src={Softwares}  alt="softwares"   />
  <div className="overlay">
    <div className="text">Softwares</div>
    </div>
  </div>
  </div>

  <div className="col-6 col-sm-4">
  <div className="container">
  <img  className="image ml-5 mt-3" src={Training}  alt="Training"   />
  <div className="overlay">
    <div className="text">Training Services</div>
    </div>
  </div>
  </div>

      
  <div className="col-6 col-sm-4">
  <div className="container">
  <img className="image ml-5 mt-3" src={BBS}  alt="BBS"   />
  <div className="overlay">
    <div className="text">Behaviorial Based Safety</div>
    </div>
  </div>
  </div>
</div>
</div>

);
}
}


export default Icons;
