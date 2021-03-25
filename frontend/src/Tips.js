import React, { Component } from 'react';
import logo from "./img/logo2.png";
import {HashLink as Link} from 'react-router-hash-link';

class Tips extends Component {

    render() { 
        return ( 
            <div>
                <div class="container-fluid bg-light position-relative shadow">
      <nav 
        class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5"
      >
        <a
        
          class="navbar-brand font-weight-bold text-secondary" style={{fontSize: `35px`}}
          
        >
          <img src={logo} style={{height: `80px`, width: `80px`, paddingBottom: `5px`}}></img>
          <span class="text-primary " style={{fontFamily: `Handlee`}}>CSEA Placement</span>
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
          <div class="navbar-nav font-weight-bold mx-auto py-0 " >
            
            {/* <!-- <nav>
              <ul>
                <li class="active"><a href="" style="text-decoration: none;">About</a></li>
                <li><a href="#tips" style="text-decoration: none;">Tips</a></li>
                <li><a href="Experiance.html" style="text-decoration: none;">Experiences</a></li>
                <li><a href="contact.html" style="text-decoration: none;">Contact</a></li>
                <li><a href="gallery.html" style="text-decoration: block;">Five</a></li>
              </ul>
            </nav> --> */}
           
            <li  class="active"><a href="index.html" class="nav-item nav-link active">Home</a></li>
            <li ><a href="#about" class="nav-item nav-link"><Link style={{textDecoration: `none`}} >About</Link></a></li>
            <li ><a href="#experience" class="nav-item nav-link" ><Link style={{textDecoration: `none`}}>Experience</Link></a></li>
            <li><a href="#experience" class="nav-item nav-link"><Link style={{textDecoration: `none`}}>Tips</Link></a></li>
            <li><a href="#faqs" class="nav-item nav-link"><Link style={{textDecoration: `none`}}>FAQ</Link></a></li>
            <li><a href="#contact" class="nav-item nav-link"><Link style={{textDecoration: `none`}}>Contact</Link></a></li>
           
         
            
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
              <h2 class="tips_head">It's the time to gain your recognition by showcasing your skills and competencies to the outside world, thus increasing your self confidence. The following are a few general tips that may help you while preparing for placements.
</h2>
<div class="timeline_tips"> 
  <div class="timeline_tips__event  animated fadeInUp delay-3s timeline_tips__event--type1">
    <div class="timeline_tips__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline_tips__event__date">
    Resume building
    </div>
    <div class="timeline_tips__event__content ">
      <div class="timeline_tips__event__title">
      
      </div>
      <div class="timeline_tips__event__description">
        <p>Be true to your resume (Add only the things that you know).
        Make sure you can answer any questions raised from your resume.
        Things to include:
        <ul>
          <li class='tips_li'>Full name, Email ID, phone number</li>
          <li class='tips_li'>Professional social sites link(optional) like LinkedIn, codechef..</li>
          <li class='tips_li'>Education (reverse order)</li>
          <li class='tips_li'> Internship (if any)</li>
          <li class='tips_li'> Projects</li>
          <li class='tips_li'> Extra curricular activities</li>
          <li class='tips_li'> Skills (programming languages or technologies known)</li>
          <li class='tips_li'> Hobbies</li>
      </ul>
      Resume should be free from mistakes.
      Try not to exceed a page(max of 2 pages).




</p>
      </div>
    </div>
  </div>
  <div class="timeline_tips__event animated fadeInUp delay-2s timeline_tips__event--type2">
    <div class="timeline_tips__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline_tips__event__date">
      20-08-2019
    </div>
    <div class="timeline_tips__event__content">
      <div class="timeline_tips__event__title">
        Lunch
      </div>
      <div class="timeline_tips__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>
  <div class="timeline_tips__event animated fadeInUp delay-1s timeline_tips__event--type3">
    <div class="timeline_tips__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline_tips__event__date">
      20-08-2019
    </div>
    <div class="timeline_tips__event__content">
      <div class="timeline_tips__event__title">
        Exercise
      </div>
      <div class="timeline_tips__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>

    </div>
  </div>
  <div class="timeline_tips__event animated fadeInUp timeline_tips__event--type1">
    <div class="timeline_tips__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline_tips__event__date">
      20-08-2019
    </div>
    <div class="timeline_tips__event__content">
      <div class="timeline_tips__event__title">
        Birthday
      </div>
      <div class="timeline_tips__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>

</div>
            </div>
         );
    }
}
 
export default Tips;