import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/SidebarComp.css'
import ChartIcon from '../assets/icon/ChartIcon.PNG'
import ContactIcon from '../assets/icon/ContactIcon.PNG'
import DashboardIcon from '../assets/icon/DahboardIcon.png'
import FundIcon from '../assets/icon/FundIcon.PNG'
import MaturityDate from '../assets/icon/MaturityDate.PNG'
import TransferIcon from '../assets/icon/TransferIcon.PNG'
import logo from '../assets/icon/logo.PNG'

class SidebarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="sidebar">
                    <div className="sidebar-header mb-3" style={{backgroundColor: '#313c52'}}>
                        <img src={logo} style={{height: '50px', margin:'auto'}}/>
                    </div>

                    <Link className="side-menu" to="/" style={{color: 'white'}}>
                        <img src={DashboardIcon} className="icon" />
                        <p className="mx-3 my-auto">Dashboard</p>
                    </Link>

                    {/* SECTION 1 */}
                    <p className="my-1 mx-3">PREMIER INDEX ALPHA</p>
                    <div className="side-menu">
                        <img src={ChartIcon} className="icon" />
                        <p className="mx-3 my-auto">Update NAV</p>
                    </div>
                    <div className="side-menu">
                        <img src={TransferIcon} className="icon" />
                        <p className="mx-3 my-auto">Transfers</p>
                    </div>
                    <div className="side-menu">
                        <img src={FundIcon} className="icon" />
                        <p className="mx-3 my-auto">Fund</p>
                    </div>
                    <div className="side-menu">
                        <img src={MaturityDate} className="icon" />
                        <p className="mx-3 my-auto">Maturity Date</p>
                    </div>

                    {/* SECTION 2 */}
                    <p className="my-1 mx-3">PERFORMANCE FEE</p>
                    <div className="side-menu">
                        <img src={FundIcon} className="icon" />
                        <p className="mx-3 my-auto">Subscription</p>
                    </div>
                    <div className="side-menu">
                        <img src={FundIcon} className="icon" />
                        <p className="mx-3 my-auto">Expected Performance Fee</p>
                    </div>
                    <div className="side-menu">
                        <img src={FundIcon} className="icon" />
                        <p className="mx-3 my-auto">Actual Performance Fee</p>
                    </div>


                    {/* ISECTION 3 */}
                    <p className="my-1 mx-3">INQUIRY</p>
                    <Link className="side-menu" to="/inquiry">
                        <img src={ContactIcon} className="icon" />
                        <p className="mx-3 my-auto text-white" >New Client</p>
                    </Link>
                    <div className="side-menu">
                        <img src={ContactIcon} className="icon" />
                        <p className="mx-3 my-auto">Existing Client</p>
                    </div>
                    <div style={{height: '35px', width: '20%', position: 'fixed', bottom: 0, backgroundColor: '#313c52'}}>

                    </div>
                </div>
            </div>

        );
    }
}

export default SidebarComp;