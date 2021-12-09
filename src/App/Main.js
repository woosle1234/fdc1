import Menu from "./Menu";
import React, { Component } from 'react';
import Challenges from "./Challenges";
import Labs from "./Labs";
import Projects from "./Projects";

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            comp: <Challenges />
        }
    }

    changeComp(e) {
        switch (e) {
            case 0:
                this.setState({ comp: <Challenges /> });
                break;
            case 1:
                this.setState({ comp: <Labs /> });
                break;
            case 2:
                this.setState({ comp: <Projects /> });
                break;
            default:
                this.setState({ comp: <Challenges /> });
                break;
        }
    }

    render() {
        return (
            <div className="d-flex flex-row mb-2">
                <Menu />
                <div id="main" className="bgColor" style={{ margin: '50px', padding: 0, width: '100%', height: '100vh' }}>

                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <div className="p-2 flex-fill">
                                <div class="input-group" style={{ borderStyle: 'solid', borderColor: 'lightgreen', borderRadius: '5px' }}>
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <button type="button" className="btn btn-outline-primary">search</button>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="btn-group bgColor">
                                    <button className="btn textColor" style={{ borderStyle: 'solid', borderColor: 'lightgreen' }} onClick={() => { this.changeComp(0) }}>Challenges</button>
                                    <button className="btn textColor" style={{ borderStyle: 'solid', borderColor: 'lightgreen' }} onClick={() => { this.changeComp(1) }}>Labs</button>
                                    <button className="btn textColor" style={{ borderStyle: 'solid', borderColor: 'lightgreen' }} onClick={() => { this.changeComp(2) }}>Projects</button>
                                </div>
                            </div>
                        </div>

                    <hr />
                    {this.state.comp}
                </div>
            </div>
        );
    }
}


