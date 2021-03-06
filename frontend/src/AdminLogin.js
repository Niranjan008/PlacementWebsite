import React, { Component } from 'react'
const axios = require('axios');
const localStorage = require('local-storage')
class AdminLogin extends Component {
    constructor() {
        super();
        this.state = {
            uname: '',
            pword: ''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const {uname,pword} = this.state;
        axios.post('http://localhost:4000/api/users/login-admin',{username:uname,password:pword}).then(
            function (response){
                if(response.status == 200){
                    window.location = "/adminverify"
                }
                try{
                    localStorage.set('authtoken',response.data.token)
                }
                catch(error){
                    console.log(error)
                }
            }
        )

    }
    render() {
        const {uname,pword} = this.state;
        return (

            <div class="row">
                <div class="col s12 m8 l4 offset-m2 offset-l4">
                    <div class="card">

                        <div class="card-action teal lighten-1 white-text">
                            <center><h3>Admin Login</h3></center>
                        </div>

                        <div class="card-content">
                            <div class="form-field">
                                <label for="username">Username</label>
                                <input type="text" name="uname" value={uname} onChange={this.onChange} autoComplete="off"/>
                            </div><br/>

                                <div class="form-field">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" name="pword"  autoComplete="off" value={pword} onChange={this.onChange}
/>
                                </div><br/>

                                    <div class="form-field">
                                    <p class="center-align">

                                        <button class="btn-large waves-effect waves-dark" onClick={this.onSubmit} >Login</button>
                                    </p>
                                    </div><br/>
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }

}
export default AdminLogin;