import React, { Component } from 'react';
import logo from "../assets/img/logo2.png";
import { $ } from 'react-jquery-plugin'
import axios from 'axios';
import { HashLink as Link } from 'react-router-hash-link';

class Experience_post extends Component {

  componentDidMount() {
    var nav = $('nav');
    var line = $('<div />').addClass('line');
    line.appendTo('.active');

    var active = nav.find('.active');
    var pos = 0;
    var wid = 0;

    if (active.length) {
      pos = active.position().left;
      wid = active.width();
      line.css({
        left: pos,
        width: wid
      });
    }



    nav.find(' li a').click(function (e) {
      e.preventDefault();
      if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

        nav.addClass('animate');

        var _this = $(this);

        nav.find('li').removeClass('active');

        var position = _this.parent().position();
        var width = _this.parent().width();

        if (position.left >= pos) {
          line.animate({
            width: ((position.left - pos) + width)
          }, 300, function () {
            line.animate({
              width: width,
              left: position.left
            }, 150, function () {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        } else {
          line.animate({
            left: position.left,
            width: ((pos - position.left) + wid)
          }, 300, function () {
            line.animate({
              width: width
            }, 150, function () {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        }

        pos = position.left;
        wid = width;
      }
    });

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
    console.log(this.state)
    let formData = new FormData();
    if(this.state.uname !== "" && this.state.email !== "" &&
      this.state.year !== "" && this.state.company !== "" && this.state.linkedIn !== "" && this.state.selectedFile !== "" ){
      formData.append('uname', uname);
      formData.append('email', email);
      formData.append('year', year);
      formData.append('company',company);
      formData.append('linkedIn',linkedIn);
      console.log(linkedIn)
      formData.append('selectedFile',selectedFile);
    axios.post('http://localhost:4000/api/experiences/add-exp',formData).then((result)=>{
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
    switch (event.target.name) {
      case 'selectedFile':
        this.setState({
          selectedFile: event.target.files[0]
        });
        break;
      default:
        this.setState({
          [event.target.name]:
          event.target.value
        });
    }
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
                <a class="nav-item nav-link" style={{ textDecoration: `none` }} onClick={this.gotoHome} >Home</a>
                </li>
                <li>
                <a class="nav-item nav-link" style={{ textDecoration: `none` }} onClick={this.gotoTips} >Preparation</a>
                </li>
                <li>
                <a class="nav-item nav-link" style={{ textDecoration: `none` }} onClick={this.gotoExp} >Experiance</a>
                </li>
                
                <li>
                <a class="nav-item nav-link" style={{ textDecoration: `none` }} onClick={this.gotoPost} >Post</a>
                </li>
                <li>
                  
                    <a class="nav-item nav-link" style={{ textDecoration: `none` }} onClick={this.gotoContact} >Contact</a>
                  
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
            {/* <!-- Navbar End --> */}




        <div class="container-fluid pt-5">
          <div class="container">
            <div class="text-center pb-2">
              <p class="section-title px-5"><span class="px-2">Get In Touch</span></p>
              <h1 class="mb-4">Contact Us For Any Query</h1>
            </div>
            <div class="row" >
              <div class="col-lg-7 mb-5 spacing">
                <div class="contact-form">
                  <div id="success"></div>
                  <form name="sentMessage" onSubmit={this.onSubmit}>
                    <div class="control-group" >
                      <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" name="uname" value={uname} onChange={this.onChange} />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                      <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" name="email" value={email} onChange={this.onChange} />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                      <input type="text" class="form-control" id="subject" placeholder="Year of Interview" required="required" data-validation-required-message="Please enter the year of interview" name="year" value={year} onChange={this.onChange} />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                      <input type="text" class="form-control" id="subject1" placeholder="Company" required="required" data-validation-required-message="Please enter your company" name="company" value={company} onChange={this.onChange} />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                      <input class="form-control" rows="6" id="linkedIn" placeholder="linkedIn" required="required" data-validation-required-message="Please enter your linkedIn Link" name="linkedIn" value={linkedIn} onChange={this.onChange}></input>
                      <p class="help-block text-danger"></p>
                    </div>
                    <div>
                      <input accept="application/pdf" rows="7" id="selectedFile" placeholder="Select File" required="required" name="selectedFile" type="file" onChange={this.handleChange}></input>

                      <p class="help-block text-danger"></p>
                    </div>
                    <div>
                      <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <!-- Footer Start --> */}
        <div
          class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5"
        >
          <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
              <a
                href=""
                class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
                style={{ fontSize: `40px`, lineHeight: `40px` }}
              >
                <i class="flaticon-043-teddy-bear"></i>
                <span class="text-white">KidKinder</span>
              </a>
              <p>
                Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
                dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
                stet diam duo eos rebum ipsum diam ipsum elitr.
          </p>
              <div class="d-flex justify-content-start mt-4">
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                ><i class="fab fa-twitter"></i
                ></a>
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                ><i class="fab fa-facebook-f"></i
                ></a>
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
              <h3 class="text-primary mb-4">Get In Touch</h3>
              <div class="d-flex">
                <h4 class="fa fa-map-marker-alt text-primary"></h4>
                <div class="pl-3">
                  <h5 class="text-white">Address</h5>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
              <div class="d-flex">
                <h4 class="fa fa-envelope text-primary"></h4>
                <div class="pl-3">
                  <h5 class="text-white">Email</h5>
                  <p>info@example.com</p>
                </div>
              </div>
              <div class="d-flex">
                <h4 class="fa fa-phone-alt text-primary"></h4>
                <div class="pl-3">
                  <h5 class="text-white">Phone</h5>
                  <p>+012 345 67890</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
              <h3 class="text-primary mb-4">Quick Links</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white mb-2" href="#"
                ><i class="fa fa-angle-right mr-2"></i>Home</a
                >
                <a class="text-white mb-2" href="#"
                ><i class="fa fa-angle-right mr-2"></i>About Us</a
                >
                <a class="text-white mb-2" href="#"
                ><i class="fa fa-angle-right mr-2"></i>Our Classes</a
                >
                <a class="text-white mb-2" href="#"
                ><i class="fa fa-angle-right mr-2"></i>Our Teachers</a
                >
                <a class="text-white mb-2" href="#"
                ><i class="fa fa-angle-right mr-2"></i>Our Blog</a
                >
                <a class="text-white" href="#"
                ><i class="fa fa-angle-right mr-2"></i>Contact Us</a
                >
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
              <h3 class="text-primary mb-4">Newsletter</h3>
              <form action="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control border-0 py-4"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control border-0 py-4"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
                <div>
                  <button
                    class="btn btn-primary btn-block border-0 py-3"
                    type="submit"
                    onClick = {this.onSubmit}
                  >
                    Submit Now
              </button>
                </div>
              </form>
            </div>
          </div>
          <div
            class="container-fluid pt-5"
            style={{ borderTop: `1px solid rgba(23, 162, 184, 0.2)` }}
          >
            <p class="m-0 text-center text-white">
              &copy;
          <a class="text-primary font-weight-bold" href="#">Your Site Name</a>.
          All Rights Reserved.
          {/* <a class="text-primary font-weight-bold" href="https://htmlcodex.com"
            >HTML Codex</a
          > */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience_post;