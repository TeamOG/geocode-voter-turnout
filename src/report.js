import React from 'react';
import TopBar from './components/appbar';

class Report extends React.Component {
    render() {
        return (
            <div className="Report">
                <TopBar />
                <h1>Reports</h1>
            </div>
        )
    }
}

export default Report;