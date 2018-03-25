import React from 'react';
import TopBar from '../components/TopBar';
import 'react-table/react-table.css'
import ReactTable from 'react-table';
import {countyCountsCols, countyCountsData} from '../data/OG_CountySubdivision_counts';

class Report extends React.Component {
    constructor(props) {
        super(props);

        const countyCountsCols = [
            { Header: 'State', accessor: 'st' },
            { Header: 'County', accessor: 'cnty', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>},
            { Header: 'Subdivision', accessor: 'sub_division' },
            { Header: 'Eligible Voters', accessor: 'elgible_voters' },
            { Header: 'Registered Voters', accessor: 'registered_voters' },
            { Header: 'Number of Votes', accessor: 'number_of_votes' },
            { Header: 'Elgible Not Voted', accessor: 'eligible_not_voted' },
            { Header: 'Registered Not Voted', accessor: 'registered_not_voted' },
            { Header: 'Year', accessor: 'Year' },
        ];

        this.state = { countyCountsCols, countyCountsData, selected: '' }
    }



    retrieveData(val, e) {
        e.preventDefault();
        console.log(this.state.selected);
        this.setState({selected: val})
    }

    renderReactTable() {


        console.log(this.state.countyCountsCols);
        return <ReactTable
                    columns={this.state.countyCountsCols}
                    data={this.state.countyCountsData}
                    defaultPageSize={10}
                    filterable={true}
                    defaultFilterMethod={(filter, row, column) => {
                        const id = filter.pivotId || filter.id
                        return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
                    }}
                />
    }

    render() {
        return (
            <div className="Report">
                <TopBar />
                <div className="container">
                    <div className="row">
                    </div>
                    <div className="row">
                        <h1>Reports</h1>
                    </div>
                    <div className="row">

                        {this.renderReactTable()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;