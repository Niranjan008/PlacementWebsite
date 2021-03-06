import React, { Component } from 'react'
const axios = require('axios');
const localStorage = require('local-storage')
class AdminVerify extends Component{
    constructor(){
        super();
        this.state = {
            dets:[]
        }
    }
    
    componentDidMount(){
        var self = this
        axios.get('http://localhost:4000/api/experiences/get-pending-approvals',{headers:{Authorization: localStorage.get('authtoken')}}).then(function (response) {
            self.setState({dets:response.data.message})
        })
    }
    render(){
        const {dets} = this.state;
        if(dets.length == 0){
            return <div><p>Hold Up!Data is loading</p></div>
        }
        return (
            <div>

            </div>
        );
        
    }
    
}
export default AdminVerify;