import React, { Component } from 'react';
import logo from "../assets/img/logo2.png";
import { $ } from 'react-jquery-plugin'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { HashLink as Link } from 'react-router-hash-link';
var result = ''
class Experience_post extends Component {

componentDidMount() {
  
}
constructor() {
  super();
  this.state = {
    uname: '',
    email: '',
    year: '',
    company: '',
    linkedIn: '',
    selectedFile: ''

  };
}

onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}
onSubmit = (e) => {
  const {uname,email,year,company,linkedIn,selectedFile} = this.state;
  
  let formData = new FormData();
  console.log(this.state.uname + this.state.email +
  this.state.year +this.state.company + this.state.linkedIn + this.state.selectedFile)
  if(this.state.uname !== "" && this.state.email !== "" &&
    this.state.year !== "" && this.state.company !== "" && this.state.linkedIn !== "" && this.state.selectedFile !== "" ){
    formData.append('uname', uname);
    formData.append('email', email);
    formData.append('year', year);
    formData.append('company',company);
    formData.append('linkedIn',linkedIn);
    console.log(linkedIn)
    formData.append('selectedFile',result);
    const ss = {uname:uname,email:email,year:year,company:company,linkedIn:linkedIn,selectedFile:selectedFile}
    console.log(ss)
  axios.post('http://18.221.72.173:4000/api/experiences/add-exp',{uname:uname,email:email,year:year,company:company,linkedIn:linkedIn,selectedFile:selectedFile}).then((result)=>{
        this.setState({uname:'',email:'',year:'',company:'',linkedIn:'',selectedFile:''});
        console.log('success')
    }).catch((e)=>{
      console.log(e)
    });
        window.alert('Post Success');
  }
  else
    window.alert('Post Failure');

}

handleChange = (event) => {
 
   
      this.setState({
        [event.target.name]:
        event.target.value
      });
  
}

gotoHome = () =>{

  window.location='/'
}
gotoTips = () =>{
  window.location='/tips'
}
gotoExp = () =>{
  window.location='/exp_view'
}
gotoHome = () =>{
  
}
gotoHome = () =>{
  
}

readFile = (event) =>{
  var file = event.target.files[0]
  let reader = new FileReader();
  var self = this
  reader.readAsDataURL(file);

  reader.onload = function() {
    result = reader.result
    self.setState({selectedFile:result})
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

  

}
render() {
  const { uname, email, year,company, linkedIn, selectedFile } = this.state;
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
              
              <li class="active">
                <a href="/" class="nav-item nav-link active">
                  Home
                </a>
              </li>
              
              <li>
                <a href="/tips" class="nav-item nav-link">
                  Preparation
                </a>
              </li>
              <li>
                <a href="/exp_post" class="nav-item nav-link">
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




      <div class="container-fluid pt-5">
        <div class="container">
          <div class="text-center pb-2">
            <p class="section-title px-5"><span class="px-2">Connect with Us</span></p>
            <h1 class="mb-4">Share your experience</h1>
          </div>
          <div class="row" >
            <div class="col-lg-7 mb-5 spacing">
              <div class="contact-form">
                <div id="success"></div>
                <form name="sentMessage" style={{alignItems:`center`}} onSubmit={this.onSubmit}>
                  <div class="control-group" >
                    <input type="text" class="form-control-post" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" name="uname" value={uname} onChange={this.onChange} />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <input type="email" class="form-control-post" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" name="email" value={email} onChange={this.onChange} />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <input type="text" class="form-control-post" id="subject" placeholder="Year of Interview" required="required" data-validation-required-message="Please enter the year of interview" name="year" value={year} onChange={this.onChange} />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <input type="text" class="form-control-post" id="subject1" placeholder="Company" required="required" data-validation-required-message="Please enter your company" name="company" value={company} onChange={this.onChange} />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <input class="form-control-post" rows="6" id="linkedIn" placeholder="linkedIn URL"  data-validation-required-message="Please enter your linkedIn Link" name="linkedIn" value={linkedIn} onChange={this.onChange}></input>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div>
                  <input type="file" class="form-control-post" id="subject2" placeholder="Experience File" required="required" data-validation-required-message="Please give a PDF as input"  onChange={this.readFile} />


                    <p class="help-block text-danger">Please Upload PDF's only</p>
                  </div>
                  <div>
                    <button class="btn btn-primary py-21 px-4 form-control-post"  type="submit" id="sendMessageButton" >Send Message</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      
      
    </div>
  );
}
}

export default Experience_post;