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
    var strj = experiencefile;
      
        
    obj = document.createElement('object');
    obj.style.width = '100%';
    obj.style.height = '500pt';
    obj.type = 'application/pdf';
    obj.data = strj;
    ReactDOM.render(<center><object data={obj.data} type={obj.type} style={{width:`90%`,height:`800px`}}></object></center>,document.getElementById('pdf'))
  
  }
  

  render(){
      const {name,year,company,exptext,linkedinlink,experiencefile} = localStorage.get('indets')

      

    
        
      
  //     var strj = experiencefile.data.data;
  //     var base64 = btoa(
  //         new Uint8Array(strj)
  //           .reduce((data, byte) => data + String.fromCharCode(byte), '')
  //       );
        
        
      
  //     const linkSource = `data:application/pdf;base64,${base64}`;

  //     var StringDecoder = require('string_decoder').StringDecoder;


  
  // var decoder = new StringDecoder('utf8');

  
  
    
      
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
            <center>
              <h1 style={{paddingLeft:`20px`}}>Name: {name}</h1>
              <h2 style={{paddingLeft:`20px`}}>Attended {company} at {year}</h2>
            </center>
            
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
            <center><span style={{
                  fontSize: `20px`,
                  fontFamily: `Handlee`,
                  color: `#00394f`,
                  fontWeight:`bold`,
                  paddingLeft:`20px`,
                  paddingRight:`2px`,
                  paddingBottom:`20px`
                }}>Connect with {name} via </span>{linkedinlink!='-'?  <a
                class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: `38px`, height: `38px`,marginBottom:`10px` }}
                href={linkedinlink}
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>:null}</center>
      </div>
    
      );
      
  }
}
export default ViewFullExp;



