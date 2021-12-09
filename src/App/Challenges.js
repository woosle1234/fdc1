import React, { Component } from "react";
import { getDarkMode } from "./DarkMode";

export default class Challenges extends Component {

    componentDidMount() {
        let texts = document.getElementsByClassName("textColor");
        let bgs = document.getElementsByClassName("bgColor");
        if (getDarkMode()) {
            for (let i = 0; i < texts.length; i++) {
                texts[i].style.color = 'rgb(255,255,255)'
            }
            for (let i = 0; i < bgs.length; i++) {
                bgs[i].style.backgroundColor = 'rgb(0,0,0)'
            }
        } else {
            for (let i = 0; i < texts.length; i++) {
                texts[i].style.color = 'rgb(0,0,0)'
            }
            for (let i = 0; i < bgs.length; i++) {
                bgs[i].style.backgroundColor = 'rgb(255,255,255)'
            }
        }
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center" >
                <h1 className="textColor">Challenges</h1>
                <br />
                <br />
                <div className="container" style={{borderStyle: 'inset', borderColor: 'lightgreen', paddingBottom:'5px'}}>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-5">
                            <img className="img-fluid" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/OvGdYUiHP6SogzPkTdclk8GIe.png" alt="..." />
                        </div>
                        <div className="col-7 textColor d-flex flex-column mb-2">
                            <div className="p-1 flex-fill" >
                                <h2><a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Placeholder Challenge</a></h2>
                                <p>Placeholder challenge text description</p>
                            </div>
                            <div className="p-1 d-flex flex-row-reverse">
                                <a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{borderStyle: 'inset', borderColor: 'lightgreen', paddingBottom:'5px'}}>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-5">
                            <img className="img-fluid" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/OvGdYUiHP6SogzPkTdclk8GIe.png" alt="..." />
                        </div>
                        <div className="col-7 textColor d-flex flex-column mb-2">
                            <div className="p-1 flex-fill" >
                                <h2><a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Placeholder Challenge</a></h2>
                                <p>Placeholder challenge text description</p>
                            </div>
                            <div className="p-1 d-flex flex-row-reverse">
                                <a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{borderStyle: 'inset', borderColor: 'lightgreen', paddingBottom:'5px'}}>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-5">
                            <img className="img-fluid" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/OvGdYUiHP6SogzPkTdclk8GIe.png" alt="..." />
                        </div>
                        <div className="col-7 textColor d-flex flex-column mb-2">
                            <div className="p-1 flex-fill" >
                                <h2><a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Placeholder Challenge</a></h2>
                                <p>Placeholder challenge text description</p>
                            </div>
                            <div className="p-1 d-flex flex-row-reverse">
                                <a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{borderStyle: 'inset', borderColor: 'lightgreen', paddingBottom:'5px'}}>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-5">
                            <img className="img-fluid" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/OvGdYUiHP6SogzPkTdclk8GIe.png" alt="..." />
                        </div>
                        <div className="col-7 textColor d-flex flex-column mb-2">
                            <div className="p-1 flex-fill" >
                                <h2><a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Placeholder Challenge</a></h2>
                                <p>Placeholder challenge text description</p>
                            </div>
                            <div className="p-1 d-flex flex-row-reverse">
                                <a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{borderStyle: 'inset', borderColor: 'lightgreen', paddingBottom:'5px'}}>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-5">
                            <img className="img-fluid" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/OvGdYUiHP6SogzPkTdclk8GIe.png" alt="..." />
                        </div>
                        <div className="col-7 textColor d-flex flex-column mb-2">
                            <div className="p-1 flex-fill" >
                                <h2><a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Placeholder Challenge</a></h2>
                                <p>Placeholder challenge text description</p>
                            </div>
                            <div className="p-1 d-flex flex-row-reverse">
                                <a href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


