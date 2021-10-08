import React from 'react'
import '../assets/css/SidebarComp.css'

class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <label for="sidebar-toggle" class="ti-menu-alt"></label>
                <div>
                    <p className="m-auto mx-5">Dashboard</p>
                </div>
                <div>
                    <p className="m-auto mx-5">Users</p>
                </div>
                <div>
                    <p className="m-auto mx-5">Partners</p>
                </div>
            </header>
        );
    }
}

export default NavbarComp;