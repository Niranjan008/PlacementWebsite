import React, { Component } from 'react'
import { $ } from "react-jquery-plugin";
import jQuery from "jquery"
import './style.css';
import logo from "../assets/img/logo2.png";
import { HashLink as Link } from "react-router-hash-link";


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

    displayExp = () =>{
    //   console.log(dets);
    console.log(this.props.location)
    
      
    //   const{name, cmpy, year,text} = this.props.data

      return ()=>
      (
        <div class="card-category-1">
            
            <div class="basic-card basic-card-aqua">
                <div class="card-content">
                    <span class="card-title">{this.props.data.name}</span>
                    <p class="card-text">
                        {this.props.data.cmpy}<br></br>
                        {this.props.data.year}<br></br>
                        {this.props.data.text}

                        
                        
                        
                    </p>
                    
                </div>

                <div class="card-link">
                <Link to={{
  pathname: '/tips',
  state: [{id: 1, name: 'Ford', color: 'red'}]
}}> Your Page </Link>
                </div>
            </div>
            </div>

      )
    }

   

    render(){
        
        //  const {index} = this.props.location
        return (
            <div>
              <div class="container-fluid bg-light position-relative shadow">
          <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a
              class="navbar-brand font-weight-bold text-secondary"
              style={{ fontSize: `35px` }}
            >
              <img
                src={logo}
                style={{ height: `80px`, width: `80px`, paddingBottom: `5px` }}
              ></img>
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

                <li>
                  <a href="#about" class="nav-item nav-link active">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" class="nav-item nav-link">
                    <Link style={{ textDecoration: `none` }}>Prep Tips</Link>
                  </a>
                </li>
                <li>
                  <a href="#experience" class="nav-item nav-link">
                    <Link style={{ textDecoration: `none` }}>
                      Interview Experiences
                    </Link>
                  </a>
                </li>
                {/* <li>
                  <a href="#experience" class="nav-item nav-link">
                    <Link style={{ textDecoration: `none` }}>Tips</Link>
                  </a>
                </li> */}
                <li>
                  <a href="#faqs" class="nav-item nav-link">
                    <Link style={{ textDecoration: `none` }}>FAQ</Link>
                  </a>
                </li>
                <li>
                  <a href="#contact" class="nav-item nav-link">
                    <Link style={{ textDecoration: `none` }}>Contact Us</Link>
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
        <div class="column-tips">
              {this.displayExp()}
              </div>
            </div> 
        );
        
    }
}
export default ViewFullExp;



