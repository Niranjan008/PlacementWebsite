import React, { Component } from 'react'
import './style.css';
import ReactDOM from 'react-dom';
import cseaLogo1 from "../assets/img/csea_black1.png"
const localStorage = require('local-storage')

const axios = require('axios')

var obj

class ViewFullExp extends Component{
  constructor(){
      super();
      this.state = {
          dets:[],
          
          
      }
      
  }
  
  
  
  
  componentDidMount(){

    const {name,year,company,exptext,linkedinlink,experiencefile} = localStorage.get('indets')
    var strj = experiencefile.data.data;
      var base64 = btoa(
          new Uint8Array(strj)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        
    obj = document.createElement('object');
    obj.style.width = '100%';
    obj.style.height = '500pt';
    obj.type = 'application/pdf';
    obj.data = 'data:application/pdf;base64,' + base64;
    ReactDOM.render(<center><object data={obj.data} type={obj.type} style={{width:`75%`,height:`500pt`}}></object></center>,document.getElementById('pdf'))
  
  }
  

  render(){
      const {name,year,company,exptext,linkedinlink,experiencefile} = localStorage.get('indets')

      

    
        
      
      var strj = experiencefile.data.data;
      var base64 = btoa(
          new Uint8Array(strj)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        
        
      
      const linkSource = `data:application/pdf;base64,${base64}`;

      var StringDecoder = require('string_decoder').StringDecoder;


  
  var decoder = new StringDecoder('utf8');

  
  
    
      
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
              
              <li class="active">
                <a href="/" class="nav-item nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="/#experience" class="nav-item nav-link">
                  Preparation
                </a>
              </li>
              <li>
                <a href="/#experience" class="nav-item nav-link">
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
            <br/>
            <br/>
            <h1 style={{paddingLeft:`20px`}}>{name}</h1>
            <h2 style={{paddingLeft:`20px`}}>{company}</h2>
            <h3 style={{paddingLeft:`20px`}}>{year}</h3>
            <br/>
            <br/>
            <p style={{
                  fontSize: `20px`,
                  fontFamily: `Handlee`,
                  color: `#00394f`,
                  paddingLeft:`20px`,
                  paddingRight:`20px`,
                  paddingBottom:`20px`
                }}></p>
            <center><a href={linkedinlink}><img style={{paddingBottom:`40px`}} src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"/></a></center>
      </div>
    
      );
      
  }
}
export default ViewFullExp;



