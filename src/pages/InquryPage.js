import React from 'react'
import '../assets/css/SidebarComp.css'
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import BreadCrumb from '../components/BreadcrumbComp';

const currency = [
    { label: 'Rupiah', value: 'RP' },
    { label: 'USD', value: 'USD' }
]

const maturity = [
    { label: '24', value: '24' },
    { label: '25', value: '25' }
]
class InquryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            maturityValue: ''
        }
    }
    render() {
        return (
            <div className="main-content">
                <main>
                <BreadCrumb title={'Inquiries / Inquiry Create'} />
                    <Card className="w-50">
                        <div className="border-bottom">
                            <p>Add New Inquiry</p>
                        </div>
                        <div className="p-fluid my-2" style={{ fontSize: '10px' }}>
                            <div className="p-field">
                                <span >Complete Name</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>ID Number</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Address</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Bank Account Number</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Bank Account Name</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Bank Branch</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Bank Swift Code</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Phone Number</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Email</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Currency</span>
                                <Dropdown optionLabel="label" value={this.state.value} options={currency} placeholder="-- PLEASE SELECT --" onChange={(e) => this.setState({ value: e.value })}
                                    panelStyle={{ fontSize: '10px' }} />
                            </div>
                            <div className="p-field">
                                <span>Deposit Amount</span>
                                <InputText id="firstname1" type="text" style={{ height: '30px' }} />
                            </div>
                            <div className="p-field">
                                <span>Maturity Option</span>
                                <Dropdown optionLabel="label" value={this.state.maturityValue} options={maturity} placeholder="-- PLEASE SELECT --" onChange={(e) => this.setState({ maturityValue: e.value })}
                                    panelStyle={{ fontSize: '10px' }} />
                            </div>
                            <div className="p-field d-flex flex-column">
                                <span>KTP Image</span>
                                <input type="file" />
                            </div>
                            <Button className="p-button-sm" label="Create New Inquiry" style={{ width: '200px', height: '30px', backgroundColor: '#321fda' }} />
                            <Button className="p-button-sm mx-2" label="Reset" style={{ width: '100px', height: '30px', backgroundColor: '#e45656' }} />
                            <div className="d-flex">
                            </div>
                        </div>
                    </Card>
                </main>
            </div>
        );
    }
}

export default InquryPage