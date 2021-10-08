import React from 'react'
import '../assets/css/SidebarComp.css'
import '../assets/css/CardComp.css'
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import FooterComp from '../components/FooterComp';
import BreadCrumb from '../components/BreadcrumbComp';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFA726',
                    tension: .4
                }
            ]
        }

        this.lineStylesData = {
            labels: ['31/01/21', '20/02/21', '06/03/21', '20/03/21', '02/04/21', '17/04/21', '01/05/21', '15/05/21', '29/05/21', '12/06/21', '10/07/21', '24/07/21', '07/08/21', '22/08/21'],
            datasets: [
                {
                    label: 'NAV',
                    data: [0, 119, 118, 109, 120, 129, 129, 130, 139, 140, 145, 146, 147, 150, 151,],
                    fill: true,
                    borderColor: '#467cc0',
                    tension: .4,
                    backgroundColor: '#508bd6'
                }
            ]
        };

        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFA726',
                    tension: .4
                }
            ]
        };
    };
    render() {
        return (
            <div className="main-content">
                <main>
                    <BreadCrumb title={'Dashboard'} />
                    {/* SECTION 1 */}
                    <div className="d-flex justify-content-around">
                        <Card className="dashboard-card text-white" style={{ background: 'linear-gradient(90deg, rgba(33,37,185,1) 0%, rgba(33,37,185,1) 35%, rgba(24,29,149,1) 100%)' }}>
                            <h5>1,997,876.38</h5>
                            <p>Balance Fund ($)</p>
                        </Card>
                        <Card className="dashboard-card text-white" style={{ background: 'linear-gradient(90deg, rgba(73,146,234,1) 0%, rgba(70,142,223,1) 35%, rgba(65,132,203,1) 100%)' }}>
                            <h5>10,651.26</h5>
                            <p>Balance Unit</p>
                        </Card>
                        <Card className="dashboard-card text-white" style={{ background: 'linear-gradient(90deg, rgba(236,166,61,1) 0%, rgba(236,166,61,1) 35%, rgba(234,157,58,1) 100%)' }}>
                            <h5>87.57</h5>
                            <p>ROI (%)</p>
                        </Card>
                        <Card className="dashboard-card text-white" style={{ background: 'linear-gradient(90deg, rgba(211,89,84,1) 0%, rgba(208,83,77,1) 35%, rgba(203,74,68,1) 100%)' }}>
                            <h5>38</h5>
                            <p>Total Partners</p>
                        </Card>
                    </div>
                    {/* SECTION 2 */}
                    <div className="d-flex mt-3">
                        <div className="card w-50 mx-1">
                            <div className="border-bottom ">
                                <p className="m-3">1Y Performance</p>
                            </div>
                            <Chart type="line" data={this.lineStylesData} options={this.basicOptions} />
                        </div>
                        <div className="card w-50 mx-1">
                            <div className="border-bottom ">
                                <p className="m-3">Transfer</p>
                            </div>
                            <Chart type="line" data={this.basicData} options={this.basicOptions} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default DashboardPage