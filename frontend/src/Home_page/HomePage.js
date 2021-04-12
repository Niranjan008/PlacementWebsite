import React, { Component } from "react";
import logo from "../assets/img/logo2.png";
import cseaLogo from "../assets/img/csea black.png";
import TipsLogo from "../assets/img/preparation.jpeg";
import ExperianceLogo from "../assets/img/interview.png";
import PostLogo from "../assets/img/post.jpg";
import jQuery from "jquery";
import { $ } from "react-jquery-plugin";
import { HashLink as Link } from "react-router-hash-link";
import headimg from "../assets/img/interview-removebg-preview.png";

import './style.css';
import './style1.css';

class HomePage extends Component {
  componentDidMount() {
    // define( [ "jquery" ], function( $ ) {

    // Your code here

    // toggle = document.querySelectorAll(".toggle")[0];
    // nav = document.querySelectorAll("nav")[0];
    // toggle_open_text = 'Menu';
    // toggle_close_text = 'Close';

    // toggle.addEventListener('click', function() {
    // 	nav.classList.toggle('open');

    //   if (nav.classList.contains('open')) {
    //     toggle.innerHTML = toggle_close_text;
    //   } else {
    //     toggle.innerHTML = toggle_open_text;
    //   }
    // }, false);

    // setTimeout(function(){
    // 	nav.classList.toggle('open');
    // }, 800);

    // $(".menu").click(function () {
    //   $(this).parent().toggleClass("close");
    // });

    // why it doesn't work on firefox?

    //kid animation
    //GSAP variables

    //Navbar

    var nav = $("nav");
    var line = $("<div />").addClass("line");
    line.appendTo(".active");

    var active = nav.find(".active");
    var pos = 0;
    var wid = 0;

    if (active.length) {
      pos = active.position().left;
      wid = active.width();
      line.css({
        left: pos,
        width: wid,
      });
    }

    nav.find(" li a").click(function (e) {
      e.preventDefault();
      if (!$(this).parent().hasClass("active") && !nav.hasClass("animate")) {
        nav.addClass("animate");

        var _this = $(this);

        nav.find("li").removeClass("active");

        var position = _this.parent().position();
        var width = _this.parent().width();

        if (position.left >= pos) {
          line.animate(
            {
              width: position.left - pos + width,
            },
            300,
            function () {
              line.animate(
                {
                  width: width,
                  left: position.left,
                },
                150,
                function () {
                  nav.removeClass("animate");
                }
              );
              _this.parent().addClass("active");
            }
          );
        } else {
          line.animate(
            {
              left: position.left,
              width: pos - position.left + wid,
            },
            300,
            function () {
              line.animate(
                {
                  width: width,
                },
                150,
                function () {
                  nav.removeClass("animate");
                }
              );
              _this.parent().addClass("active");
            }
          );
        }

        pos = position.left;
        wid = width;
      }
    });

    // Timeline

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    // Timeline end

    (function ($) {
      "use strict";

      // Dropdown on mouse hover
      // $(document).ready(function () {
      //   function toggleNavbarMethod() {
      //     if ($(window).width() > 992) {
      //       $(".navbar .dropdown")
      //         .on("mouseover", function () {
      //           $(".dropdown-toggle", this).trigger("click");
      //         })
      //         .on("mouseout", function () {
      //           $(".dropdown-toggle", this).trigger("click").blur();
      //         });
      //     } else {
      //       $(".navbar .dropdown").off("mouseover").off("mouseout");
      //     }
      //   }
      //   toggleNavbarMethod();
      //   $(window).resize(toggleNavbarMethod);
      // });

      // Back to top button
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
          $(".back-to-top").fadeIn("slow");
        } else {
          $(".back-to-top").fadeOut("slow");
        }
      });
      $(".back-to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
      });

      //nav animation
      $(document).on("click", 'a[href^="#"]', function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          1000
        );
      });

      //  $(window).scroll(function () {
      // //     if ($(this).scrollTop() > 100) {
      // //       $(".back-to-top").fadeIn("slow");
      // //     } else {
      // //       $(".back-to-top").fadeOut("slow");
      // //     }
      // //   });
      // //   $(".back-to-top").click(function () {
      // //     $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      // //     return false;
      // //   });

      // Portfolio isotope and filter
      //   var portfolioIsotope = $(".portfolio-container").isotope({
      //     itemSelector: ".portfolio-item",
      //     layoutMode: "fitRows",
      //   });

      //   $("#portfolio-flters li").on("click", function () {
      //     $("#portfolio-flters li").removeClass("active");
      //     $(this).addClass("active");

      //     portfolioIsotope.isotope({ filter: $(this).data("filter") });
      //   });

      // Post carousel
      // $(".post-carousel").owlCarousel({
      //   autoplay: true,
      //   smartSpeed: 1500,
      //   dots: false,
      //   loop: true,
      //   nav: true,
      //   navText: [
      //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      //     '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      //   ],
      //   responsive: {
      //     0: {
      //       items: 1,
      //     },
      //     576: {
      //       items: 1,
      //     },
      //     768: {
      //       items: 2,
      //     },
      //     992: {
      //       items: 2,
      //     },
      //   },
      // });

      // // Testimonials carousel
      // $(".testimonial-carousel").owlCarousel({
      //   center: true,
      //   autoplay: true,
      //   smartSpeed: 2000,
      //   dots: true,
      //   loop: true,
      //   responsive: {
      //     0: {
      //       items: 1,
      //     },
      //     576: {
      //       items: 1,
      //     },
      //     768: {
      //       items: 2,
      //     },
      //     992: {
      //       items: 3,
      //     },
      //   },
      // });
    })(jQuery);
    // });
  }
  render() {
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
        {/* <!-- Navbar End --> */}

        <div class="container-fluid bg-primary px-0 px-md-5 mb-5">
          {/* <!-- <video src="video-1.mp4" autoPlay loop muted /> --> */}
          <div class="row align-items-center px-3">
            <div class="col-lg-61 text-center text-lg-left ">
              <div className="typing-demo">
                <h4 class="text-white mb-4 mt-5 mt-lg-0">
                  Need a clear idea about placements? You're at the right place.
                  Need a clear idea about placements? You're at the right
                  place.Need a clear idea about placements? You're at the right
                  place.
                </h4>

                <h1 class="display-3 font-weight-bold text-white">
                  Welcome Folks!
                </h1>
              </div>
              {/* <p class="text-white mb-4">
                  On this page you can Choose a model to add to your skill
                  (Custom selected by default) and Choose a method to host your
                  skill's backend resources (Provision your own selected by
                  default). Leave the default options selected and click the
                  Create Skill button.
                </p> */}
              {/* <!-- <a href="" class="btn btn-secondary mt-1 py-3 px-5">Learn More</a> --> */}
            </div>
            {/* <!-- kid animation --> */}

            <div class=" col-lg-61 text-center text-lg-right ">
              <img class="img-fluid mt-5 " src={headimg} alt="" />
              {/* <div class="col-lg-5">
                <img class=" headimg-logo " src={headimg} alt="" />
              </div> */}
              {/* <div class="col-lg-5">
                <img src={headimg} alt="" />
              </div> */}
            </div>
          </div>
        </div>
        {/* <!-- About Start --> */}
        <div id="about" class="container-fluid py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 bounce-1  ">
                <img
                  class=" csea-logo rounded mb-5 mb-lg-0"
                  src={cseaLogo}
                  alt=""
                />
              </div>

              <div class="col-lg-7">
                <p class="section-title pr-5">
                  <span class="pr-2">Learn About Us</span>
                </p>
                <h1 class="mb-4">CSEA</h1>
                <p>
                  The Computer Science and Engineering Association (CSEA) of
                  College of Engineering Guindy is an association with a legacy
                  of more than 10 years, established for the primary goal of
                  “Knowledge Advancement”. Being the brainchild of Department of
                  Computer Science and Engineering (DCSE) of CEG, one of the
                  oldest engineering colleges of the country, the association
                  ensures that the role of technocrats and specialists in
                  various industries is implied. It extends to develop and
                  promote the progression of Computer Science and technologies
                  to its students as well as the members of the global community
                  through its rich alumni support. Comprising students and
                  faculty, CSEA is one of the most active Engineering
                  Associations in the city.
                </p>
                <div class="row pt-2 pb-4">
                  {/* <!-- <div class="col-6 col-md-4">
                <img class="img-fluid rounded" src="img/about-2.jpg" alt="" />
              </div> --> */}
                  <div class="col-6 col-md-8">
                    <ul class="list-inline m-0">
                      <li class="py-2 border-top border-bottom">
                        <i class="fa fa-check text-primary mr-3"></i>We Code
                      </li>
                      <li class="py-2 border-bottom">
                        <i class="fa fa-check text-primary mr-3"></i>We Create
                      </li>
                      <li class="py-2 border-bottom">
                        <i class="fa fa-check text-primary mr-3"></i>We Learn
                      </li>
                      <li class="py-2 border-bottom">
                        <i class="fa fa-check text-primary mr-3"></i>We Teach
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="swanky_title__social">
                  <a href="http://cseaceg.org.in/" target="_blank">
                    <div class="slide">
                      <div class="arrow">
                        <div class="stem"></div>
                        <div class="point"></div>
                      </div>
                    </div>
                    {/* <!-- <img/> --> */}
                    <p>Learn More</p>
                  </a>
                </div>

                {/* <!-- <a href="http://cseaceg.org.in/" target="blank" class="btn btn-primary mt-2 py-2 px-4">More about CSEA</a> --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Cards --> */}

        <div id="experience" class="container-fluid pt-5">
          <div class="container">
            <div class="text-center pb-2">
              <p class="section-title px-5">
                <span class="px-2">Come on!</span>
              </p>
              <h1 class="mb-4">Lets get started!</h1>
            </div>
            <div class="row">
              <div class="wrapper2">
                <div class="container2" id="c0">
                  <div class="image2" id="i0">
                    <div class="city2">
                      {/* <?xml version="1.0" encoding="utf-8"?> */}

                      <ellipse
                        class="st4"
                        id="sh1"
                        cx="170.5"
                        cy="124.75"
                        rx="37.5"
                        ry="37.5"
                      />
                      <ellipse
                        id="XMLID_15_"
                        class="st4"
                        cx="170.5"
                        cy="124.75"
                        rx="27.5"
                        ry="27.5"
                      />

                      <polygon
                        id="XMLID_1_"
                        class="st2"
                        points="-0.301,224.5 74.849,149.5 150,224.5 "
                      />
                      <polygon
                        id="XMLID_2_"
                        class="st0"
                        points="108,224.5 74.849,149.5 150,224.5 "
                      />
                      <polygon
                        id="XMLID_4_"
                        class="st2"
                        points="207.256,225.5 253.849,179 300.443,225.5 "
                      />
                      <polygon
                        id="XMLID_3_"
                        class="st0"
                        points="274.403,225.5 253.849,179 300.443,225.5 "
                      />
                      <line
                        id="XMLID_5_"
                        class="st1"
                        x1="179"
                        y1="202"
                        x2="179"
                        y2="226"
                      />
                      <line
                        id="XMLID_6_"
                        class="st1"
                        x1="179"
                        y1="207"
                        x2="190"
                        y2="207"
                      />
                      <line
                        id="XMLID_7_"
                        class="st1"
                        x1="172"
                        y1="214"
                        x2="180"
                        y2="214"
                      />
                      <line
                        id="XMLID_8_"
                        class="st1"
                        x1="190"
                        y1="202"
                        x2="190"
                        y2="207"
                      />
                      <line
                        id="XMLID_9_"
                        class="st1"
                        x1="172"
                        y1="207"
                        x2="172"
                        y2="214"
                      />
                      <circle
                        id="XMLID_10_"
                        class="st3"
                        cx="87.5"
                        cy="98.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_11_"
                        class="st3"
                        cx="24.5"
                        cy="68.5"
                        r="2.5"
                      />
                      <circle
                        id="XMLID_12_"
                        class="st3"
                        cx="219.5"
                        cy="18.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_13_"
                        class="st3"
                        cx="272.5"
                        cy="03.5"
                        r="2.0"
                      />
                      <circle
                        id="XMLID_14_"
                        class="st3"
                        cx="144.5"
                        cy="12.5"
                        r="1.0"
                      />
                      <circle
                        id="XMLID_10_"
                        class="st3"
                        cx="107.5"
                        cy="328.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_11_"
                        class="st3"
                        cx="24.5"
                        cy="58.5"
                        r="2.5"
                      />
                      <circle
                        id="XMLID_12_"
                        class="st3"
                        cx="19.5"
                        cy="128.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_13_"
                        class="st3"
                        cx="72.5"
                        cy="113.5"
                        r="2.0"
                      />
                      <circle
                        id="XMLID_14_"
                        class="st3"
                        cx="174.5"
                        cy="92.5"
                        r="1.0"
                      />

                      {/* </svg> */}
                      <img class=" Tipslogo " src={TipsLogo} alt="" />
                    </div>
                  </div>
                  <div class="story2" id="s0">
                    <div class="info2">
                      <h3 class="haha">Preparation Tips</h3>
                      <p class="haha">
                        {" "}
                        The secret to getting ahead is getting started.
                        Placement being the significant part of the future
                        ahead, it needs both hard and smart work to be shown in
                        preparation. To provide a head start, here are some
                        guidelines to prepare you for the big day!
                      </p>
                      <p>
                        <button className="button1">
                          <span>Explore</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrapper2">
                <div class="container2" id="c0">
                  <div class="image2" id="i0">
                    <div class="city2">
                      {/* <?xml version="1.0" encoding="utf-8"?> */}

                      <ellipse
                        class="st4"
                        id="sh1"
                        cx="170.5"
                        cy="124.75"
                        rx="37.5"
                        ry="37.5"
                      />
                      <ellipse
                        id="XMLID_15_"
                        class="st4"
                        cx="170.5"
                        cy="124.75"
                        rx="27.5"
                        ry="27.5"
                      />

                      <polygon
                        id="XMLID_1_"
                        class="st2"
                        points="-0.301,224.5 74.849,149.5 150,224.5 "
                      />
                      <polygon
                        id="XMLID_2_"
                        class="st0"
                        points="108,224.5 74.849,149.5 150,224.5 "
                      />
                      <polygon
                        id="XMLID_4_"
                        class="st2"
                        points="207.256,225.5 253.849,179 300.443,225.5 "
                      />
                      <polygon
                        id="XMLID_3_"
                        class="st0"
                        points="274.403,225.5 253.849,179 300.443,225.5 "
                      />
                      <line
                        id="XMLID_5_"
                        class="st1"
                        x1="179"
                        y1="202"
                        x2="179"
                        y2="226"
                      />
                      <line
                        id="XMLID_6_"
                        class="st1"
                        x1="179"
                        y1="207"
                        x2="190"
                        y2="207"
                      />
                      <line
                        id="XMLID_7_"
                        class="st1"
                        x1="172"
                        y1="214"
                        x2="180"
                        y2="214"
                      />
                      <line
                        id="XMLID_8_"
                        class="st1"
                        x1="190"
                        y1="202"
                        x2="190"
                        y2="207"
                      />
                      <line
                        id="XMLID_9_"
                        class="st1"
                        x1="172"
                        y1="207"
                        x2="172"
                        y2="214"
                      />
                      <circle
                        id="XMLID_10_"
                        class="st3"
                        cx="87.5"
                        cy="98.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_11_"
                        class="st3"
                        cx="24.5"
                        cy="68.5"
                        r="2.5"
                      />
                      <circle
                        id="XMLID_12_"
                        class="st3"
                        cx="219.5"
                        cy="18.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_13_"
                        class="st3"
                        cx="272.5"
                        cy="03.5"
                        r="2.0"
                      />
                      <circle
                        id="XMLID_14_"
                        class="st3"
                        cx="144.5"
                        cy="12.5"
                        r="1.0"
                      />
                      <circle
                        id="XMLID_10_"
                        class="st3"
                        cx="107.5"
                        cy="328.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_11_"
                        class="st3"
                        cx="24.5"
                        cy="58.5"
                        r="2.5"
                      />
                      <circle
                        id="XMLID_12_"
                        class="st3"
                        cx="19.5"
                        cy="128.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_13_"
                        class="st3"
                        cx="72.5"
                        cy="113.5"
                        r="2.0"
                      />
                      <circle
                        id="XMLID_14_"
                        class="st3"
                        cx="174.5"
                        cy="92.5"
                        r="1.0"
                      />

                      {/* </svg> */}
                      <img class=" Tipslogo " src={ExperianceLogo} alt="" />
                    </div>
                  </div>
                  <div class="story2" id="s0">
                    <div class="info2">
                      <h3 class="haha">Interview Experience</h3>
                      <p class="haha">
                        {" "}
                        Placement being the most crucial juncture of one's life,
                        makes the transformation from being a student to being
                        professional.Hence to help you get started, the
                        experiences of several seniors placed in top companies
                        are listed in order to pave the way for your success
                        journey.
                      </p>
                      <p>
                        <button className="button1">
                          <span>Explore</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrapper2">
                <div class="container2" id="c0">
                  <div class="image2" id="i0">
                    <div class="city2">
                      {/* <?xml version="1.0" encoding="utf-8"?> */}

                      <ellipse
                        class="st4"
                        id="sh1"
                        cx="170.5"
                        cy="124.75"
                        rx="37.5"
                        ry="37.5"
                      />
                      <ellipse
                        id="XMLID_15_"
                        class="st4"
                        cx="170.5"
                        cy="124.75"
                        rx="27.5"
                        ry="27.5"
                      />

                      <polygon
                        id="XMLID_1_"
                        class="st2"
                        points="-0.301,224.5 74.849,149.5 150,224.5 "
                      />
                      <polygon
                        id="XMLID_2_"
                        class="st0"
                        points="108,224.5 74.849,149.5 150,224.5 "
                      />
                      <polygon
                        id="XMLID_4_"
                        class="st2"
                        points="207.256,225.5 253.849,179 300.443,225.5 "
                      />
                      <polygon
                        id="XMLID_3_"
                        class="st0"
                        points="274.403,225.5 253.849,179 300.443,225.5 "
                      />
                      <line
                        id="XMLID_5_"
                        class="st1"
                        x1="179"
                        y1="202"
                        x2="179"
                        y2="226"
                      />
                      <line
                        id="XMLID_6_"
                        class="st1"
                        x1="179"
                        y1="207"
                        x2="190"
                        y2="207"
                      />
                      <line
                        id="XMLID_7_"
                        class="st1"
                        x1="172"
                        y1="214"
                        x2="180"
                        y2="214"
                      />
                      <line
                        id="XMLID_8_"
                        class="st1"
                        x1="190"
                        y1="202"
                        x2="190"
                        y2="207"
                      />
                      <line
                        id="XMLID_9_"
                        class="st1"
                        x1="172"
                        y1="207"
                        x2="172"
                        y2="214"
                      />
                      <circle
                        id="XMLID_10_"
                        class="st3"
                        cx="87.5"
                        cy="98.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_11_"
                        class="st3"
                        cx="24.5"
                        cy="68.5"
                        r="2.5"
                      />
                      <circle
                        id="XMLID_12_"
                        class="st3"
                        cx="219.5"
                        cy="18.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_13_"
                        class="st3"
                        cx="272.5"
                        cy="03.5"
                        r="2.0"
                      />
                      <circle
                        id="XMLID_14_"
                        class="st3"
                        cx="144.5"
                        cy="12.5"
                        r="1.0"
                      />
                      <circle
                        id="XMLID_10_"
                        class="st3"
                        cx="107.5"
                        cy="328.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_11_"
                        class="st3"
                        cx="24.5"
                        cy="58.5"
                        r="2.5"
                      />
                      <circle
                        id="XMLID_12_"
                        class="st3"
                        cx="19.5"
                        cy="128.5"
                        r="1.5"
                      />
                      <circle
                        id="XMLID_13_"
                        class="st3"
                        cx="72.5"
                        cy="113.5"
                        r="2.0"
                      />
                      <circle
                        id="XMLID_14_"
                        class="st3"
                        cx="174.5"
                        cy="92.5"
                        r="1.0"
                      />

                      {/* </svg> */}
                      <img class=" Tipslogo " src={PostLogo} alt="" />
                    </div>
                  </div>
                  <div class="story2" id="s0">
                    <div class="info2">
                      <h3 class="haha">Give your Experiance</h3>
                      <p class="haha">
                        {" "}
                        Built during a time when Egypt was one of the richest
                        and most powerful civilizations in the world. Their
                        massive scale reflects the unique role that the pharaoh
                        played in ancient Egyptian society.
                      </p>
                      <p>
                        <button className="button1">
                          <span>Explore</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="text-center pb-2" id="Tips">
          <p class="section-title px-5">
            <span class="px-2">To keep in mind</span>
          </p>
          <h1 class="mb-4">How to answer a coding question in an Interview?</h1>
        </div>
        <br />
        <br />

        <section class="timeline">
          <ul>
            <li>
              <div>
                <time>1</time>
                <div class="discovery">
                  <h1>Clarify the problem statement:</h1>
                  <p>
                    It’s important to understand the problem clearly before
                    attempting to solve it. It’s vital you ask the right
                    questions.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <time>2</time>
                <div class="discovery">
                  <h1>Constraints:</h1>
                  <p>
                    Once you are clear with the problem statement you need to
                    ask if there are any particular constraints that you need to
                    adhere to.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <time>3</time>
                <div class="discovery">
                  <h1>Observations:</h1>
                  <p>
                    Any problem has some specific peculiar behavior associated
                    to it. Remember you need to explicitly tell the interviewer
                    all your observations.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <time>4</time>
                <div class="discovery">
                  <h1>Approaches:</h1>
                  <p>
                    This is the most crucial part in the entire interview
                    process. If you plan to use a data structure to solve the
                    problem, specify the reason as to why you chose to do so. If
                    you get stuck try the brute force approach.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <time>5</time>
                <div class="discovery">
                  <h1>Discuss your approach:</h1>
                  <p>
                    Once you are done with narrowing down the approach and you
                    think you might have a solution, discuss it with the
                    interviewer. If the interviewer suggests something different
                    gracefully accept it and start thinking along those lines.
                    Dont be too rigid with your approach.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <time>6</time>
                <div class="discovery">
                  <h1>Edge Cases and counter examples:</h1>
                  <p>
                    Once you are certain for a particular solution make sure you
                    check out your approach for all the edge cases.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <time>7</time>
                <div class="discovery">
                  <h1>Writing the Code:</h1>
                  <p class="p1">
                    Make sure of the following:
                    <ol class="p1">a. Your code is readable.</ol>
                    <ol class="p1">b. You specify comments in your code</ol>
                    <ol class="p1">
                      c. Dry run your code with a few examples before showing it
                      to the interviewer.
                    </ol>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <br />
        <br />
        <br />
        <br />
        <div class="text-center pb-2" id="faqs">
          <p class="section-title px-5">
            <span class="px-2">To keep in mind</span>
          </p>
          <h1 class="mb-4">Frequently Asked Questions</h1>
        </div>
        <section id="faq">
          <div class="container" data-aos="fade-up">
            {/* <div class="section-header">
          <h2>F.A.Q</h2>
        </div> */}

            <div
              class="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="col-lg-9">
                <ul class="faq-list">
                  <li>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      Which programming language should I use?
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Companies usually let you choose, in which case you
                        should use your most comfortable language. Sometimes,
                        your interviewer will ask a question specific to a
                        language if you list it on your resume. So keep that in
                        mind! If you’re not confident with a language, make that
                        clear on your resume. Put your less-strong languages
                        under a header like ‘Working Knowledge’ or assign star
                        rating.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq2"
                      class="collapsed question"
                    >
                      What if I draw a blank and can't answer a question?
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        It is okay to not know. The interview process mainly
                        tests the thinking process/ logical ability rather than
                        providing correct answers. If you are struck, ask your
                        interviewer for help or hint. Don't give up!
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq3"
                      class="collapsed question"
                    >
                      How should I behave in a face to face interview?{" "}
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Give a firm handshake after entering and greet the
                        interviewers. Be friendly and respectful. Don’t argue
                        with the interviewer. Be confident and drive your own
                        interview.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq4"
                      class="collapsed question"
                    >
                      What should I wear for the interview?
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                    <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Wear neat and formal dress. Avoid using bright colours.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Supporters Section ======= --> */}
        {/* <div class="text-center pb-2" id="Tips">
      <p class="section-title px-5">
        <span class="px-2">To keep in mind</span>
      </p>
      <h1 class="mb-4">How to answer a coding question in an Interview?</h1>
    </div> */}
        <section id="supporters" class="section-with-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>Practice Websites:</h2>
            </div>

            <div
              class="row no-gutters supporters-wrap clearfix"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <a href="https://www.geeksforgeeks.org/" target="blank">
                    <img
                      src="assets/img/supporters/geeks.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <a href="https://leetcode.com/" target="blank">
                    <img
                      src="assets/img/supporters/leetcode.svg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <a href="https://www.hackerrank.com/" target="blank">
                    <img
                      src="assets/img/supporters/hackerrank.svg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              {/* <!-- https://codeforces.com/ --> */}
              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="supporter-logo">
                  <a href="https://www.codechef.com/" target="blank">
                    <img
                      src="assets/img/supporters/Codechef(new)_logo.svg.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              {/* <!-- <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets/img/supporters/5.png" class="img-fluid" alt="" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets/img/supporters/6.png" class="img-fluid" alt="" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets/img/supporters/7.png" class="img-fluid" alt="" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets/img/supporters/8.png" class="img-fluid" alt="" />
            </div>
          </div> --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Sponsors Section --> */}

        {/* <!-- Footer Start --> */}
        <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
          <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
              <a
                href=""
                class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
                style={{ fontSize: `40px`, lineHeight: `40px` }}
              >
                <i class="flaticon-043-teddy-bear"></i>
                <span class="text-white" style={{ fontFamily: `Handlee` }}>
                  CSEA Placement
                </span>
              </a>
              <p>
                Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet
                ea dolor et magna dolor, elitr rebum duo est sed diam elitr.
                Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.
              </p>
              <div class="d-flex justify-content-start mt-4">
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                  style={{ width: `38px`, height: `38px` }}
                  href="#"
                >
                  <i class="fab fa-instagram"></i>
                </a>
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
                <a class="text-white mb-2" href="#about">
                  <i class="fa fa-angle-right mr-2"></i>About Us
                </a>
                <a class="text-white mb-2" href="#experience">
                  <i class="fa fa-angle-right mr-2"></i>Prep Tips
                </a>
                <a class="text-white mb-2" href="#experience">
                  <i class="fa fa-angle-right mr-2"></i>Interview Experience
                </a>
                <a class="text-white mb-2" href="#faq">
                  <i class="fa fa-angle-right mr-2"></i>FAQ
                </a>
                <a class="text-white" href="#contact">
                  <i class="fa fa-angle-right mr-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div id="contact" class="col-lg-3 col-md-6 mb-5">
              <h3 class="text-primary mb-4">Wanna share ur experience?</h3>
              {/* <form action="">
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
                  >
                    Submit Now
                  </button>
                </div>
              </form> */}
              <button
                class="btn btn-primary btn-block border-0 py-3"
                type="submit"
              >
                Click here to post
              </button>
            </div>
          </div>
          <div
            class="container-fluid pt-5"
            style={{ borderTop: `1px solid rgba(23, 162, 184, 0.2)` }}
          >
            <p class="m-0 text-center text-white">
              &copy;
              <a class="text-primary font-weight-bold" href="#about">
                CSEA Placement
              </a>
              . All Rights Reserved. Designed by
              <a
                class="text-primary font-weight-bold"
                href="http://cseaceg.org.in/"
              >
                CSEA
              </a>
            </p>
          </div>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" class="btn btn-primary p-3 back-to-top">
          <i class="fa fa-angle-double-up"></i>
        </a>
      </div>
    );
  }
}

export default HomePage;
