// import React, { Component } from 'react';
// import logo from "../assets/img/logo2.png";
// import {HashLink as Link} from 'react-router-hash-link';
// import './style.css';

// class Tips extends Component {

//     render() { 
//         return ( 
//             <div>
//                 <div class="container-fluid bg-light position-relative shadow">
//       <nav 
//         class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5"
//       >
//         <a
        
//           class="navbar-brand font-weight-bold text-secondary" style={{fontSize: `35px`}}
          
//         >
//           <img src={logo} style={{height: `80px`, width: `80px`, paddingBottom: `5px`}}></img>
//           <span class="text-primary " style={{fontFamily: `Handlee`}}>CSEA Placement</span>
//         </a>
//         <button
//           type="button"
//           class="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarCollapse"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div
//           class="collapse navbar-collapse justify-content-between"
//           id="navbarCollapse"
//         >
//           <div class="navbar-nav font-weight-bold mx-auto py-0 " >
            
//             {/* <!-- <nav>
//               <ul>
//                 <li class="active"><a href="" style="text-decoration: none;">About</a></li>
//                 <li><a href="#tips" style="text-decoration: none;">Tips</a></li>
//                 <li><a href="Experiance.html" style="text-decoration: none;">Experiences</a></li>
//                 <li><a href="contact.html" style="text-decoration: none;">Contact</a></li>
//                 <li><a href="gallery.html" style="text-decoration: block;">Five</a></li>
//               </ul>
//             </nav> --> */}
           
//             <li  class="active"><a href="index.html" class="nav-item nav-link active">Home</a></li>
//             <li ><a href="#about" class="nav-item nav-link"><Link style={{textDecoration: `none`}} >About</Link></a></li>
//             <li ><a href="#experience" class="nav-item nav-link" ><Link style={{textDecoration: `none`}}>Experience</Link></a></li>
//             <li><a href="#experience" class="nav-item nav-link"><Link style={{textDecoration: `none`}}>Tips</Link></a></li>
//             <li><a href="#faqs" class="nav-item nav-link"><Link style={{textDecoration: `none`}}>FAQ</Link></a></li>
//             <li><a href="#contact" class="nav-item nav-link"><Link style={{textDecoration: `none`}}>Contact</Link></a></li>
           
         
            
//             {/* <!-- <div class="nav-item dropdown">
//               <a
//                 href="#"
//                 class="nav-link dropdown-toggle"
//                 data-toggle="dropdown"
//                 >Pages</a
//               >
//               <div class="dropdown-menu rounded-0 m-0">
//                 <a href="blog.html" class="dropdown-item">Blog Grid</a>
//                 <a href="single.html" class="dropdown-item">Blog Detail</a>
//               </div>
//             </div>
//             <a href="contact.html" class="nav-item nav-link">Contact</a> -->  */}
//           </div>
         
//         </div>
//       </nav>
//     </div>
//               <h2 class="tips_head">It's the time to gain your recognition by showcasing your skills and competencies to the outside world, thus increasing your self confidence. The following are a few general tips that may help you while preparing for placements.
// </h2>
// <div class="timeline_tips"> 
//   <div class="timeline_tips__event  animated fadeInUp delay-3s timeline_tips__event--type1">
//     <div class="timeline_tips__event__icon ">
//       <i class="lni-cake"></i>

//     </div>
//     <div class="timeline_tips__event__date">
//     Resume building
//     </div>
//     <div class="timeline_tips__event__content ">
//       <div class="timeline_tips__event__title">
      
//       </div>
//       <div class="timeline_tips__event__description">
//         <p>Be true to your resume (Add only the things that you know).
//         Make sure you can answer any questions raised from your resume.
//         Things to include:
//         <ul>
//           <li class='tips_li'>Full name, Email ID, phone number</li>
//           <li class='tips_li'>Professional social sites link(optional) like LinkedIn, codechef..</li>
//           <li class='tips_li'>Education (reverse order)</li>
//           <li class='tips_li'> Internship (if any)</li>
//           <li class='tips_li'> Projects</li>
//           <li class='tips_li'> Extra curricular activities</li>
//           <li class='tips_li'> Skills (programming languages or technologies known)</li>
//           <li class='tips_li'> Hobbies</li>
//       </ul>
//       Resume should be free from mistakes.
//       Try not to exceed a page(max of 2 pages).




// </p>
//       </div>
//     </div>
//   </div>
//   <div class="timeline_tips__event animated fadeInUp delay-2s timeline_tips__event--type2">
//     <div class="timeline_tips__event__icon">
//       <i class="lni-burger"></i>

//     </div>
//     <div class="timeline_tips__event__date">
//       20-08-2019
//     </div>
//     <div class="timeline_tips__event__content">
//       <div class="timeline_tips__event__title">
//         Lunch
//       </div>
//       <div class="timeline_tips__event__description">
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
//       </div>
//     </div>
//   </div>
//   <div class="timeline_tips__event animated fadeInUp delay-1s timeline_tips__event--type3">
//     <div class="timeline_tips__event__icon">
//       <i class="lni-slim"></i>

//     </div>
//     <div class="timeline_tips__event__date">
//       20-08-2019
//     </div>
//     <div class="timeline_tips__event__content">
//       <div class="timeline_tips__event__title">
//         Exercise
//       </div>
//       <div class="timeline_tips__event__description">
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
//       </div>

//     </div>
//   </div>
//   <div class="timeline_tips__event animated fadeInUp timeline_tips__event--type1">
//     <div class="timeline_tips__event__icon">
//       <i class="lni-cake"></i>

//     </div>
//     <div class="timeline_tips__event__date">
//       20-08-2019
//     </div>
//     <div class="timeline_tips__event__content">
//       <div class="timeline_tips__event__title">
//         Birthday
//       </div>
//       <div class="timeline_tips__event__description">
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
//       </div>
//     </div>
//   </div>

// </div>
//             </div>
//          );
//     }
// }
 
// export default Tips;

import React, { Component } from 'react';
import logo from "../assets/img/logo2.png";
import {HashLink as Link} from 'react-router-hash-link';
import jQuery from "jquery";
import './style.css';

class Tips extends Component {
  componentDidMount(){
    jQuery(document).ready(function($){
      var timelines = $('.cd-horizontal-timeline'),
        eventsMinDistance = 120;
    
      (timelines.length > 0) && initTimeline(timelines);
    
      function initTimeline(timelines) {
        timelines.each(function(){
          var timeline = $(this),
            timelineComponents = {};
          //cache timeline components 
          timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
          timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
          timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
          timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
          timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
          timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
          timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
          timelineComponents['eventsContent'] = timeline.children('.events-content');
    
          //assign a left postion to the single events along the timeline
          setDatePosition(timelineComponents, eventsMinDistance);
          //assign a width to the timeline
          var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
          //the timeline has been initialize - show it
          timeline.addClass('loaded');
    
          //detect click on the next arrow
          timelineComponents['timelineNavigation'].on('click', '.next', function(event){
            event.preventDefault();
            updateSlide(timelineComponents, timelineTotWidth, 'next');
          });
          //detect click on the prev arrow
          timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
            event.preventDefault();
            updateSlide(timelineComponents, timelineTotWidth, 'prev');
          });
          //detect click on the a single event - show new event content
          timelineComponents['eventsWrapper'].on('click', 'a', function(event){
            event.preventDefault();
            timelineComponents['timelineEvents'].removeClass('selected');
            $(this).addClass('selected');
            updateOlderEvents($(this));
            updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
            updateVisibleContent($(this), timelineComponents['eventsContent']);
          });
    
          //on swipe, show next/prev event content
          timelineComponents['eventsContent'].on('swipeleft', function(){
            var mq = checkMQ();
            ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
          });
          timelineComponents['eventsContent'].on('swiperight', function(){
            var mq = checkMQ();
            ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
          });
    
          //keyboard navigation
          $(document).keyup(function(event){
            if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
              showNewContent(timelineComponents, timelineTotWidth, 'prev');
            } else if( event.which=='39' && elementInViewport(timeline.get(0))) {
              showNewContent(timelineComponents, timelineTotWidth, 'next');
            }
          });
        });
      }
    
      function updateSlide(timelineComponents, timelineTotWidth, string) {
        //retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
          wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        //translate the timeline to the left('next')/right('prev') 
        (string == 'next') 
          ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
          : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
      }
    
      function showNewContent(timelineComponents, timelineTotWidth, string) {
        //go from one event to the next/previous one
        var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
          newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
    
        if ( newContent.length > 0 ) { //if there's a next/prev event - show it
          var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
            newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
          
          updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
          updateVisibleContent(newEvent, timelineComponents['eventsContent']);
          newEvent.addClass('selected');
          selectedDate.removeClass('selected');
          updateOlderEvents(newEvent);
          updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
        }
      }
    
      function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
        //translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null),
          eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
          timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
          timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
    
            if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
              translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
            }
      }
    
      function translateTimeline(timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; //only negative translate value
        value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
        setTransformValue(eventsWrapper, 'translateX', value+'px');
        //update navigation arrows visibility
        (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
      }
    
      function updateFilling(selectedEvent, filling, totWidth) {
        //change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
          eventLeft = eventStyle.getPropertyValue("left"),
          eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
        var scaleValue = eventLeft/totWidth;
        setTransformValue(filling.get(0), 'scaleX', scaleValue);
      }
    
      function setDatePosition(timelineComponents, min) {
        for (var i = 0; i < timelineComponents['timelineDates'].length; i++) { 
            var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
              distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
        }
      }
    
      function setTimelineWidth(timelineComponents, width) {
        var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
          timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
          timeSpanNorm = Math.round(timeSpanNorm) + 4,
          totalWidth = timeSpanNorm*width;
        timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
        updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
      
        return totalWidth;
      }
    
      function updateVisibleContent(event, eventsContent) {
        var eventDate = event.data('date'),
          visibleContent = eventsContent.find('.selected'),
          selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
          selectedContentHeight = selectedContent.height();
    
        if (selectedContent.index() > visibleContent.index()) {
          var classEnetering = 'selected enter-right',
            classLeaving = 'leave-left';
        } else {
          var classEnetering = 'selected enter-left',
            classLeaving = 'leave-right';
        }
    
        selectedContent.attr('class', classEnetering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
          visibleContent.removeClass('leave-right leave-left');
          selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight+'px');
      }
    
      function updateOlderEvents(event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
      }
    
      function getTranslateValue(timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null),
          timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                 timelineStyle.getPropertyValue("-moz-transform") ||
                 timelineStyle.getPropertyValue("-ms-transform") ||
                 timelineStyle.getPropertyValue("-o-transform") ||
                 timelineStyle.getPropertyValue("transform");
    
            if( timelineTranslate.indexOf('(') >=0 ) {
              var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
            } else {
              var translateValue = 0;
            }
    
            return Number(translateValue);
      }
    
      function setTransformValue(element, property, value) {
        element.style["-webkit-transform"] = property+"("+value+")";
        element.style["-moz-transform"] = property+"("+value+")";
        element.style["-ms-transform"] = property+"("+value+")";
        element.style["-o-transform"] = property+"("+value+")";
        element.style["transform"] = property+"("+value+")";
      }
    
      //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
      function parseDate(events) {
        var dateArrays = [];
        events.each(function(){
          var dateComp = $(this).data('date').split('/'),
            newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
          dateArrays.push(newDate);
        });
          return dateArrays;
      }
    
      function parseDate2(events) {
        var dateArrays = [];
        events.each(function(){
          var singleDate = $(this),
            dateComp = singleDate.data('date').split('T');
          if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
            var dayComp = dateComp[0].split('/'),
              timeComp = dateComp[1].split(':');
          } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
            var dayComp = ["2000", "0", "0"],
              timeComp = dateComp[0].split(':');
          } else { //only DD/MM/YEAR
            var dayComp = dateComp[0].split('/'),
              timeComp = ["0", "0"];
          }
          var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
          dateArrays.push(newDate);
        });
          return dateArrays;
      }
    
      function daydiff(first, second) {
          return Math.round((second-first));
      }
    
      function minLapse(dates) {
        //determine the minimum distance among events
        var dateDistances = [];
        for (var i = 1; i < dates.length; i++) { 
            var distance = daydiff(dates[i-1], dates[i]);
            dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
      }
    
      /*
        How to tell if a DOM element is visible in the current viewport?
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      */
      function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
    
        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
    
        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
      }
    
      function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
      }
    });
  }

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
              {/* <h2 class="tips_head">It's the time to gain your recognition by showcasing your skills and competencies to the outside world, thus increasing your self confidence. The following are a few general tips that may help you while preparing for placements.
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

</div>*/}



<section class="cd-horizontal-timeline">
	<div class="timeline-tips">
		<div class="events-wrapper">
			<div class="events">
				<ol>
					<li><a href="#0" data-date="16/01/2014" class="selected" style={{fontSize: `13px`}}>Build your resume</a></li>
					<li><a href="#0" data-date="20/02/2014" style={{fontSize: `13px`}}>Practise coding</a></li>
					<li><a href="#0" data-date="20/03/2014" style={{fontSize: `13px`}}>Brush up CS subjects</a></li>
					<li><a href="#0" data-date="20/04/2014" style={{fontSize: `13px`}}>Learn Aptitude</a></li>
					<li><a href="#0" data-date="20/05/2014" style={{fontSize: `13px`}}>Prepare specifically</a></li>
					<li><a href="#0" data-date="25/06/2014" style={{fontSize: `13px`}}>Getting ready for interview</a></li>
					<li><a href="#0" data-date="10/07/2014"></a></li> 
          {/*
					 <li><a href="#0" data-date="10/11/2014"></a></li>
					<li><a href="#0" data-date="10/11/2014"></a></li>
					<li><a href="#0" data-date="10/11/2014"></a></li>
					<li><a href="#0" data-date="10/11/2014"></a></li> */}

{/* <li><a href="#0" data-date="16/01/2014" class="selected">16 Jan</a></li>
					<li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
					<li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
					<li><a href="#0" data-date="20/05/2014">20 May</a></li>
					<li><a href="#0" data-date="09/07/2014">09 Jul</a></li>
					<li><a href="#0" data-date="30/08/2014">30 Aug</a></li>
					<li><a href="#0" data-date="15/09/2014">15 Sep</a></li>
					<li><a href="#0" data-date="01/11/2014">01 Nov</a></li>
					<li><a href="#0" data-date="10/12/2014">10 Dec</a></li>
					<li><a href="#0" data-date="19/01/2015">29 Jan</a></li>
        <li><a href="#0" data-date="03/03/2015">3 Mar</a></li> */}
				
				</ol> 

				<span class="filling-line" aria-hidden="true"></span>
			</div> 
		</div> 
			
		<ul class="cd-timeline-navigation">
			<li><a href="#0" class="prev inactive">Prev</a></li>
			<li><a href="#0" class="next" >Next</a></li>
		</ul> 
	</div> 

	<div class="events-content">
		<ol>
			<li class="selected" data-date="16/01/2014">
				<h2 style={{fontSize: `60px`}}>Horizontal Timeline</h2>
				{/* <em >January 16th, 2014</em> */}
				<p style={{fontSize: `20px`}}>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="20/02/2014">
				<h2 style={{fontSize: `60px`}}>Event title here</h2>
				{/* <em>February 28th, 2014</em> */}
				<p style={{fontSize: `20px`}}>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="20/03/2014">
				<h2 style={{fontSize: `60px`}}>Event title here</h2>
				<em>March 20th, 2014</em>
				<p style={{fontSize: `20px`}}>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="20/04/2014">
				<h2 style={{fontSize: `60px`}}>Event title here</h2>
				<em>May 20th, 2014</em>
				<p style={{fontSize: `20px`}}>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="20/05/2014">
				<h2 style={{fontSize: `60px`}}>Event title here</h2>
				<em>July 9th, 2014</em>
				<p style={{fontSize: `20px`}}>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="25/06/2014">
				<h2 style={{fontSize: `60px`}}>Event title here</h2>
				<em>August 30th, 2014</em>
				<p style={{fontSize: `20px`}}>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="15/09/2014">
				<h2>Event title here</h2>
				<em>September 15th, 2014</em>
				<p >	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="01/11/2014">
				<h2>Event title here</h2>
				<em>November 1st, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="10/12/2014">
				<h2>Event title here</h2>
				<em>December 10th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="19/01/2015">
				<h2>Event title here</h2>
				<em>January 19th, 2015</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="03/03/2015">
				<h2>Event title here</h2>
				<em>March 3rd, 2015</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>
		</ol>
	</div> 
</section>
            </div> 
         );
    }
}
 
export default Tips;