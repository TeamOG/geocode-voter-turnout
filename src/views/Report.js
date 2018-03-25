import React from 'react';
import TopBar from '../components/TopBar';
import 'react-table/react-table.css'
import ReactTable from 'react-table';
import { countyCountsData } from '../data/OG_CountySubdivision_counts';
import { countyAgeData } from '../data/OG_CountySubdivision_by_Age';

class Report extends React.Component {
    constructor(props) {
        super(props);

        const countyCounts = {
            columns: [{ Header: 'State', accessor: 'st' },
                { Header: 'County', accessor: 'cnty', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>},
                { Header: 'Subdivision', accessor: 'sub_division' },
                { Header: 'Eligible Voters', accessor: 'eligible_voters' },
                { Header: 'Registered Voters', accessor: 'registered_voters' },
                { Header: 'Number of Votes', accessor: 'number_of_votes' },
                { Header: 'Eligible Not Voted', accessor: 'eligible_not_voted' },
                { Header: 'Registered Not Voted', accessor: 'registered_not_voted' },
                { Header: 'Year', accessor: 'Year' }],
            data: countyCountsData,
            friendly_name: 'County/Subdivision Vote Counts',
            slug: 'vote-counts'
        };

        const countyAge = {
            columns: [{Header: 'State', accessor: 'st'},
                {Header: 'County', accessor: 'cnty', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>},
                {Header: 'Subdivision', accessor: 'sub_division'},
                {Header: 'Total Population', accessor: 'tot_pop'},
                {Header: '0-15', accessor: 'between0_to_15_pop'},
                {Header: '15-25', accessor: 'between15_to_25_pop'},
                {Header: '25-45', accessor: 'between25_45_pop'},
                {Header: '45-59', accessor: 'between45_59_pop'},
                {Header: '60-85', accessor: 'between60_85_pop'},
                {Header: '85+', accessor: 'above85_pop'}],
            data: countyAgeData,
            friendly_name: 'County/Subdivision Age Totals',
            slug: 'age-totals'
        };

        this.state = { data: {countyCounts: countyCounts, countyAge: countyAge}, selected: '', selected_report: '' }
    }

    retrieveData(val, e) {
        e.preventDefault();
        this.setState({selected: val})
    }

    renderReactTable() {
        console.log(this.state.countyCountsCols);
        if (this.state.selected == '' && this.state.selected_report == '') {
            return <p>Click a report.</p>
        } else {
            return <ReactTable
                columns={this.state.data[this.state.selected_report].columns}
                data={this.state.data[this.state.selected_report].data}
                defaultPageSize={10}
                filterable={true}
                defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id
                    return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
                }}
            />
        }
    }

    handleReport(report) {
        this.setState({selected_report: report});
    }

    render() {
        return (
            <div className="Report">
                <TopBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Reports</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-info mr-2" onClick={this.handleReport.bind(this, 'countyCounts')}>Vote Counts</button>
                            <button type="button" className="btn btn-info mr-2" onClick={this.handleReport.bind(this, 'countyAge')}>Age Counts</button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {this.renderReactTable()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;