// import React, { useState } from 'react';
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import { v4 as uuidv4 } from 'uuid';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   }
// }))

// function ViewExp() {
//   const classes = useStyles()
//   const [inputFields, setInputFields] = useState([
//     { id: uuidv4(), firstName: '', lastName: '' },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputFields);
//   };

//   const handleChangeInput = (id, event) => {
//     const newInputFields = inputFields.map(i => {
//       if(id === i.id) {
//         i[event.target.name] = event.target.value
//       }
//       return i;
//     })
    
//     setInputFields(newInputFields);
//   }

//   const handleAddFields = () => {
//     setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
//   }

//   const handleRemoveFields = id => {
//     const values  = [...inputFields];
//     values.splice(values.findIndex(value => value.id === id), 1);
//     setInputFields(values);
//   }

//   return (
//     <Container>
//       <h1>Add New Member</h1>
//       <form className={classes.root} onSubmit={handleSubmit}>
//         { inputFields.map(inputField => (
//           <div key={inputField.id}>
//             <TextField
//               name="firstName"
//               label="First Name"
//               variant="filled"
//               value={inputField.firstName}
//               onChange={event => handleChangeInput(inputField.id, event)}
//             />
//             <TextField
//               name="lastName"
//               label="Last Name"
//               variant="filled"
//               value={inputField.lastName}
//               onChange={event => handleChangeInput(inputField.id, event)}
//             />
//             <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
//               <RemoveIcon />
//             </IconButton>
//             <IconButton
//               onClick={handleAddFields}
//             >
//               <AddIcon />
//             </IconButton>
//           </div>
//         )) }
//         <Button
//           className={classes.button}
//           variant="contained" 
//           color="primary" 
//           type="submit" 
//           endIcon={<Icon>send</Icon>}
//           onClick={handleSubmit}
//         >Send</Button>
//       </form>
//     </Container>
//   );
// }

// export default ViewExp;


import React, { Component } from 'react'
import { $ } from "react-jquery-plugin";
import jQuery from "jquery"
import './style.css';
import logo from "../assets/img/logo2.png";
import { HashLink as Link } from "react-router-hash-link";


const axios = require('axios')



class ViewExp extends Component{
    constructor(){
        super();
        this.state = {
            dets:[],
            
            
        }
        
    }
    
    
    
    componentDidMount(){

      
      
    
        var self = this
        axios.get('http://localhost:4000/api/experiences/getallexp').then(function (response) {
            self.setState({dets:response.data.message})
            
            console.log("successfull!!");
            // console.log(dets);
        })
        .catch(()=>
        {
          alert('Error fetching data');
        })
    }

    displayExp = (dets) =>{
      console.log(dets);
      // if(!dets.length) return null;
      

      return dets.map((det,index)=>
      (
        <div key={index}  class="card-category-1">
            
            <div class="basic-card basic-card-aqua">
                <div class="card-content">
                    <span class="card-title">{det.name}</span>
                    <p class="card-text">
                        {det.company}<br></br>
                        {det.year}
                        
                        {/* file={{data: JSON.parse(renderpdf).dets}} */}
                        
                    </p>
                    {/* <p class="card-text">{det.exptext}</p> */}
                </div>

                <div class="card-link">
                <Link to={{
  pathname: '/exp_full_view',
    data: {name:det.name, cmpy:det.company, year:det.year, text:det.exptext}
}}> Read Article </Link>
                </div>
            </div>
            </div>

      ))
    }

    dispExpPop = (dets,index) =>{

      return dets.map((det)=>{
        

      })
    }

    render(){
        

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
              {this.displayExp(this.state.dets)}
              </div>
            </div> 
        );
        
    }
}
export default ViewExp;



