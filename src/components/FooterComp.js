import React from 'react'
import '../assets/css/SidebarComp.css'

class FooterComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer className="footer" >
                <p className="my-auto"><span style={{ color: 'blue' }}>RAVTEL</span> © 2021</p>
            </footer>
        );
    }
}

export default FooterComp;