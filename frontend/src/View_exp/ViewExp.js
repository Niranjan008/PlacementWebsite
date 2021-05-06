

import React, { Component } from 'react'
import './style.css';
import {MDBListGroup, MDBListGroupItem,MDBIcon,MDBCol,MDBBtn} from 'mdbreact';
import { HashLink as Link } from "react-router-hash-link";
import cseaLogo1 from "../assets/img/csea_black1.png"
import { $ } from "react-jquery-plugin";
const localStorage = require('local-storage')

const axios = require('axios')



class ViewExp extends Component{
constructor(){
  super();
  this.state = {
      dets:[],
      onload: true,
      emptydata:false,

  }
  this.searchRef = React.createRef();
  this.buttonRef = React.createRef();

  this.savestate.bind(this)
  this.searchlist.bind(this)
}



onChange = (e) => {
this.setState({ [e.target.name]: e.target.value });
}


savestate(ind){
console.log(this.state.dets[ind])
localStorage.set('indets',this.state.dets[ind])
}
componentDidMount(){




  var self = this
  axios.get('http://18.221.72.173:4000/api/experiences/getallexp',{mode:'cors'}).then(function (response) {


      self.setState({dets:response.data.message,onload:false})
      
    
      
  })
  .catch((e)=>
  {
    
    window.alert(e)
  })
  // $(window).on("load", function () {
  //   $("#loader").fadeOut(15000);
  // });
//   $('#search_text').keydown(function() {
//     $('input').keyup(function(event) {
//         if (event.which === 13)
//         {
//             event.preventDefault();
//             $('#search_button').click();
//         }
//     });
// });

 


}

displayExp = (dets) =>{

var slf = this


return dets.map((det,index)=>
(
  <div key={index}  class="card-category-1">
      
      <div class="basic-card basic-card-aqua">
          <div class="card-content">
              <span class="card-title">{det.name}</span>
              <p class="card-text">
                  {det.company}<br></br>
                  {det.year}
                  
                  
                  
              </p>
              
          </div>

          <div class="card-link">
<span onClick={() => this.savestate(index)}><Link target="_blank" to= {{pathname: '/exp_full_view'
}} > Read Article </Link></span>

          </div>
      </div>
      </div>

))
}


searchexp = ()=>{
var self = this
  self.setState({onload:true,emptydata:false})
  if(this.state.search_text == ''){
     axios.get('http://18.221.72.173:4000/api/experiences/getallexp').then(function (response) {
      self.setState({dets:response.data.message,search_text:self.state.search_text,onload:false})
      
      if(response.data.message.length==0){
        self.setState({emptydata:true})
      }
      
      
  })
  .catch((e)=>
  {
    
    alert(e);
  })
  }
  else{
    var self = this
    axios.get('http://18.221.72.173:4000/api/experiences/getbycompany/' + self.state.search_text).then(function (response) {

        self.setState({dets:response.data.message,search_text:self.state.search_text,onload:false})
        if(response.data.message.length==0){
          self.searchlist({company:'All'})
        }
        
        
        
    })
    .catch((e)=>
    {
       alert(e);
      
    })
  }

}

searchlist = (cmpny)=>{
var self = this
self.setState({onload:true})
self.setState({emptydata:false})
if(cmpny.company == 'All'){
  axios.get('http://18.221.72.173:4000/api/experiences/getallexp').then(function (response) {
      self.setState({dets:response.data.message,search_text:self.state.search_text,onload:false})
      
      if(response.data.message.length==0){
        self.setState({emptydata:true})
      }
      
      
  })
  .catch((e)=>
  {
    
    alert(e);
  })

}
else{
axios.get('http://18.221.72.173:4000/api/experiences/getbycompany/' + cmpny.company).then(function (response) {
 

  if(response.data.message.length==0){
    self.setState({emptydata:true})
  }
  
  else{
    self.setState({onload:true})
  self.setState({dets:response.data.message,search_text:self.state.search_text,onload:false})
  

  }
  
  
})
.catch((e)=>
{

alert(e);
})
}

}

render(){
const search_text = this.state.search_text
var cmpnylist = ['Accenture','Accolite','Alstom', 'Amazon','Aspire Systems','Barclays','BNY Mellon','Chronus','Citicorp','Enphase Energy','Fidelity','Global Analytics','Hubstream','Khoros','LTI','Micron Technology','Morgan Stanley','MU Sigma','Quantiphi','RBS','SAP Labs','TCS','TCS Digital','Tekion','Temenos','Verizon','Visa','Vivriti Capital','Walmart Labs','Wells Fargo','Wipro']
  return (
      <div>
        <div class="container-fluid bg-light position-relative shadow">
    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
      <a
        class="navbar-brand font-weight-bold text-secondary"
        style={{ fontSize: `35px` }}
      >
      
    <img
            src={cseaLogo1}
            style={{ height: `80px`, width: `80px`, paddingBottom: `5px` }}
          ></img>
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div class="navbar-nav font-weight-bold mx-auto py-0 ">
        
          <li >
            <a href="/" class="nav-item nav-link">
              Home
            </a>
          </li>
          
          <li>
            <a href="/tips" class="nav-item nav-link">
              Preparation
            </a>
          </li>
          <li class="active">
            <a href="/exp_view" class="nav-item nav-link active">
              Experiences
            </a>
          </li>
          
          <li>
            <a href="/exp_post" class="nav-item nav-link">
              Post
            </a>
          </li>
          <li>
            <a href="/#contact" class="nav-item nav-link">
              Contact
            </a>
          </li>

          
        </div>
      </div>
    </nav>
  </div>

  <MDBCol className='searchbar' >
    
<div style={{display:`flex`,flexDirection:`row`}}>
<MDBIcon style={{paddingRight:`10px`,  paddingTop:`10px`}}floating icon="search" size="lg"/>
<input className="form-control" name="search_text" id = "search_text" onChange={this.onChange}  ref={this.searchRef} type="text" placeholder="Enter company name" aria-label="Search" />
<div className='search-bar-button'>
<MDBBtn  onClick={this.searchexp} color="blue" rounded size="sm" id = "search_button"type="submit" className="mrc" ref={this.buttonRef}  >
Search
</MDBBtn>
</div>
<div className="showAll">
 
<MDBBtn  onClick={()=>this.searchlist({company:'All'})} color="blue" rounded size="sm"  className="allButton"  >
All
</MDBBtn>
</div>

</div>
</MDBCol>
<br/>
<div style={{float:`left`,paddingTop:`10px`,height:`600px`,width:`20%`,overflow:`hidden`,overflowY:`scroll`}} className="sidebar-list">
  <MDBListGroup style={{ width: "20rem" }}>
    <span onClick={()=>this.searchlist({company:'All'})}><MDBListGroupItem style={{cursor:`pointer`,backgroundImage:`linear-gradient(to bottom right, #00bfad, #99a3d4)`,color:`white`}}>All</MDBListGroupItem></span>
    {cmpnylist.map( (company) =>(
    
    <span onClick={() =>this.searchlist({company})}><MDBListGroupItem style={{cursor:`pointer`}}>{company}</MDBListGroupItem></span>

  ))}


</MDBListGroup> 
</div>
{
  this.state.onload?

<div id="loader"></div>:null
       
}
<div style={{paddingTop:`30px`}}>
  <div class="container-sidebar">
        {this.displayExp(this.state.dets)}
        </div>
      </div> 

    {this.state.emptydata?<center><h3>No experiences available yet!</h3></center>:null}
  </div>
  );
  
}
}
export default ViewExp;



