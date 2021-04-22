import React, { Component } from 'react'
import { $ } from "react-jquery-plugin";
import jQuery from "jquery"
import './style.css';
import logo from "../assets/img/logo2.png";
import { HashLink as Link } from "react-router-hash-link";
const localStorage = require('local-storage')

const axios = require('axios')



class ViewFullExp extends Component{
    constructor(){
        super();
        this.state = {
            dets:[],
            
            
        }
        
    }
   
    
    
    
    componentDidMount(){

      
      
    
        // var self = this
        // axios.get('http://localhost:4000/api/experiences/getallexp').then(function (response) {
        //     self.setState({dets:response.data.message})
            
        //     console.log("successfull!!");
        //     // console.log(dets);
        // })
        // .catch(()=>
        // {
        //   alert('Error fetching data');
        // })
    }

   
   
    
      
    //   const{name, cmpy, year,text} = this.props.data
    
      
    

   

    render(){
        const {name,year,company,exptext,linkedinlink} = localStorage.get('indets')
        
        return (
            <div>
             <div class="container-fluid bg-light position-relative shadow">
          <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a
              class="navbar-brand font-weight-bold text-secondary"
              style={{ fontSize: `35px` }}
            >
              {/* <img
                src={logo}
                style={{ height: `80px`, width: `80px`, paddingBottom: `5px` }}
              ></img> */}
              <span class="text-primary " style={{ fontFamily: `Handlee` }}>
                CSEA Placement
              </span>
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
                {/* <!-- <nav>
              <ul>
                <li class="active"><a href="" style="text-decoration: none;">About</a></li>
                <li><a href="#tips" style="text-decoration: none;">Tips</a></li>
                <li><a href="Experiance.html" style="text-decoration: none;">Experiences</a></li>
                <li><a href="contact.html" style="text-decoration: none;">Contact</a></li>
                <li><a href="gallery.html" style="text-decoration: block;">Five</a></li>
              </ul>
            </nav> --> */}
                <li class="active">
                  <a href="/" class="nav-item nav-link active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" class="nav-item nav-link ">
                    About
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
                {/* <li>
                  <a href="/tips" class="nav-item nav-link">
                    Tips
                  </a>
                </li>  */}
                <li>
                  <a href="/#faqs" class="nav-item nav-link">
                   FAQ
                  </a>
                </li>
                <li>
                  <a href="/#contact" class="nav-item nav-link">
                    Contact
                  </a>
                </li>

                {/* <!-- <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                <a href="single.html" class="dropdown-item">Blog Detail</a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a> -->  */}
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
                  }}>{exptext}</p>
              <center><a href={linkedinlink}><img style={{paddingBottom:`40px`}} src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"/></a></center>
        </div>
      
        );
        
    }
}
export default ViewFullExp;



