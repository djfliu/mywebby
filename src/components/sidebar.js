import React, { Component } from "react";
import Sidebar from "react-sidebar";


export default class sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render(){
        return (
            <Sidebar
                sidebar={<b>THIS IS WHERE THE CONTENT GOES</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                pullRight={true}
                styles={{ sidebar: { background: "transparent" } }}
            >
                <div>
                    <a className="menu-toggle rounded" onClick={() => this.onSetSidebarOpen(true)}>
                        <i className="fas fa-bars" />
                    </a>
                </div>
            </Sidebar>
        )
    }
}