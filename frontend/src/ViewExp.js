
import React, { Component } from 'react'
import Sidebar from "react-sidebar";
const axios = require('axios');
const mql = window.matchMedia(`(min-width: 800px)`);

class ViewExp extends Component{
    constructor(){
        super();
        this.state = {
            dets:[],
            sidebarDocked: mql.matches,
            sidebarOpen: false
        }
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);    
    }
    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
      }
     
      componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
     
      mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
      }
    
    componentDidMount(){
        var self = this
        axios.get('http://localhost:4000/api/experiences/getallexp').then(function (response) {
            self.setState({dets:response.data.message})
        })
    }

    render(){
        

        const {dets} = this.state;
        console.log(dets)
        if(dets.length == 0){
            return <div><p>Hold Up!Data is loading</p></div>
        }
        return (
            <div >
            <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <b>Main content</b>
      </Sidebar>


            </div>
        );
        
    }
}
export default ViewExp;