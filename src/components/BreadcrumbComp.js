import React from 'react'

class BreadCrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="w-100" style={{width: '100%', backgroundColor: 'white', height: '100%', position: 'relative', right: '35px', bottom: '15px', padding: '1%'}}>
                <p style={{margin: 'auto'}}><span style={{color: 'blue'}}>Home</span> / {this.props.title}</p>
            </div>
        );
    }
}

export default BreadCrumb;