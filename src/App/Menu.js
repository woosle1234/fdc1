import 'bootstrap/dist/css/bootstrap.min.css';
import { SetDarkMode } from './DarkMode';
import React, { Component } from 'react';
import menuImg from '../Assets/menu.png'

export default class Menu extends Component {
    constructor() {
        super()
        this.state = {
            DarkModeText: 'Dark Mode',
            opened: false
        }
    }

    //open and close nav will set the width for the side menu for the open and close transition

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "50px";
        document.getElementById("mySidenav").style.padding = "0px";
        document.getElementById("mySidenav").style.borderStyle = "none";
    }

    openNav(){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.padding = "10px";
        document.getElementById("main").style.marginLeft = "300px";
        document.getElementById("mySidenav").style.borderStyle = "solid";
        document.getElementById("mySidenav").style.borderLeftStyle = "none";
        document.getElementById("mySidenav").style.borderTopStyle = "none";
        document.getElementById("mySidenav").style.borderBottomStyle = "none";
    }

    render() {
        return (
            <div className="d-flex flex-row bd-highlight" style={{position: 'fixed', zIndex:1,overflowX:'hidden',height:'100%', margin:0 }}>
                <div style={{padding:0,margin:0}}>
                    <div id="mySidenav" className="d-flex flex-column bgColor sidenav" style={{overflow:"hidden", width:0}}>
                        <ul className="list-unstyled ps-0" style={{ marginTop: "5px" }}>
                            <li className="mb-1">
                                <button className="btn btn-toggle align-items-center rounded collapsed textColor" data-bs-toggle="collapse" data-bs-target="#Browse-collapse" aria-expanded="false">
                                    Browse
                                </button>
                                <div className="collapse" id="Browse-collapse" style={{ marginTop: "5px" }}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small rounded" style={{ backgroundColor: 'rgb(200,200,200)' }}>
                                        <li><a href="/" className="nav-link rounded textColor">Explore</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Labs</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Challenges</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Organizations</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button className="btn btn-toggle align-items-center rounded collapsed textColor" data-bs-toggle="collapse" data-bs-target="#MyAcitivty-collapse" aria-expanded="false" style={{ marginTop: "5px" }} >
                                    My Activity
                                </button>
                                <div className="collapse" id="MyAcitivty-collapse" style={{ marginTop: "5px" }}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small rounded" style={{ backgroundColor: 'rgb(200,200,200)' }}>
                                        <li><a href="/" className="nav-link rounded textColor">Projects</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Team Matching</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Achievements</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Resources</a></li>
                                        <li><a href="/" className="nav-link rounded textColor">Help Center</a></li>
                                    </ul>
                                </div>
                            </li>
                            <button className="btn align-items-center rounded textColor" style={{ marginTop: "5px" }} onClick={() => { SetDarkMode() ? this.setState({ DarkModeText: 'Light Mode' }) : this.setState({ DarkModeText: 'Dark Mode' }) }}>
                                {
                                this.state.DarkModeText //this text will change depending on light mode or dark mode
                                }  
                            </button>
                            <br />
                            <button className="btn btn-toggle align-items-center rounded textColor" style={{ marginTop: "5px" }}>
                                v8.0.1
                            </button>
                        </ul>
                        <hr />
                        <div className="p-2 flex-fill">
                        </div>
                        <a href="/" className="p-2 align-items-center link-dark text-decoration-none textColor">
                            <strong>Username</strong>
                        </a>
                    </div>
                </div>
                <div style={{transition: '0.5s'}}>
                    <input type="image" src={menuImg} alt="..." style={{height:'50px',width:'50px', marginTop:'30px'}} onClick={()=>{
                        if(this.state.opened){
                            this.closeNav();
                            this.setState({opened:false});
                        }else{
                            this.openNav();
                            this.setState({opened:true});
                        }
                    }}/>
                </div>
            </div>
        );
    }
}


