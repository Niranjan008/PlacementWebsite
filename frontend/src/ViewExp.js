
import React, { Component } from 'react'
import Sidebar from "react-sidebar";
import TaggedContentCard from './Cards';
const axios = require('axios');
const mql = window.matchMedia(`(min-width: 800px)`);
// import React from 'react';
// import cx from 'classnames';
// import styles from './styles.scss';


class ViewExp extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         dets:[],
            
    //     }
        
    // }
    constructor(props) {
      super(props);
    }
    // componentWillMount() {
    //     mql.addListener(this.mediaQueryChanged);
    //   }
     
    //   componentWillUnmount() {
    //     this.state.mql.removeListener(this.mediaQueryChanged);
    //   }
     
     
     
    //   mediaQueryChanged() {
    //     this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    //   }
    
    // componentDidMount(){
    //     var self = this
    //     axios.get('http://localhost:4000/api/experiences/getallexp').then(function (response) {
    //         self.setState({dets:response.data.message})
    //     })
    // }

    render(){
        

        return (
            <TaggedContentCard></TaggedContentCard>
        );
        
    }
}
export default ViewExp;