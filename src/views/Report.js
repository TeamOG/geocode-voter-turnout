import React from 'react';
import TopBar from '../components/TopBar';
import 'react-table/react-table.css'
import ReactTable from 'react-table';

import BarChart from '../components/BarChart';
import { countyCountsData } from '../data/OG_CountySubdivision_counts';
import { countyAgeData } from '../data/OG_CountySubdivision_by_Age';
import { countyHHData } from '../data/OG_CountySubdivision_by_Household';
import { countyRaceData } from '../data/OG_CountySubdivision_by_race';

class Report extends React.Component {
    constructor(props) {
        super(props);

        const countyCounts = {
            columns: [{ Header: 'State', accessor: 'st' },
                { Header: 'County', accessor: 'cnty', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>, filterable: true},
                { Header: 'Subdivision', accessor: 'sub_division', filterable: true },
                { Header: 'Eligible Voters', accessor: 'eligible_voters' },
                { Header: 'Registered Voters', accessor: 'registered_voters' },
                { Header: 'Number of Votes', accessor: 'number_of_votes' },
                { Header: 'Eligible Not Voted', accessor: 'eligible_not_voted' },
                { Header: 'Registered Not Voted', accessor: 'registered_not_voted' },
                { Header: 'Year', accessor: 'Year' }],
            data: countyCountsData,
            friendly_name: 'County/Subdivision Vote Counts',
            slug: 'vote-counts',
            charts: { barChart: 'eligible_voters, registered_voters, number_of_votes' }
        };

        const countyAge = {
            columns: [{Header: 'State', accessor: 'st'},
                {Header: 'County', accessor: 'cnty', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>, filterable: true},
                {Header: 'Subdivision', accessor: 'sub_division', filterable: true},
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

        const countyHH = {
            columns: [{Header: 'State', accessor: 'st'},
                {Header: 'County', accessor: 'cnty', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>, filterable: true},
                {Header: 'Subdivision', accessor: 'sub_division', filterable: true},
                {Header: 'Total Household', accessor: 'tot_household'},
                {Header: '18 & under', accessor: 'household_18underkid'},
                {Header: 'Household Married Couple', accessor: 'household_marriedcouple'},
                {Header: 'Household Nonfamily', accessor: 'household_nonfamily'},
                {Header: 'Household Average Size', accessor: 'household_avgsize'},
                {Header: 'Population Kids 3 & above', accessor: 'population_kids3above_school'},
                {Header: 'Population Kids Kindergarden', accessor: 'population_kidsgrade1_8'},
                {Header: 'Population Kids Grades 1-8', accessor: 'population_kidsgrade1_8'},
                {Header: 'Population Kids 9-12', accessor: 'population_kidsgrade9_12'},
                {Header: 'Population Kids College Graduate', accessor: 'population_collegegraduate'},
                {Header: '85+', accessor: 'above85_pop'}],
            data: countyHHData,
            friendly_name: 'County/Subdivision Households',
            slug: 'households'
        };

        const countyRace = {
            columns: [{Header: 'State', accessor: 'State'},
                {Header: 'County', accessor: 'County', Cell: props => <a href="#" onClick={this.retrieveData.bind(this, props.value)}>{props.value}</a>, filterable: true},
                {Header: 'Subdivision', accessor: 'City', filterable: true},
                {Header: 'Total Population', accessor: 'Est_RACE_Total_population'},
                {Header: 'White', accessor: 'Est_RACE_One_race_White'},
                {Header: 'Black/African American', accessor: 'Est_RACE_One_race_Black_or_African_American'},
                {Header: 'American Indian/Alaska Native', accessor: 'Est_RACE_One_race_American_Indian_and_Alaska_Native'},
                {Header: 'Asian', accessor: 'Est_RACE_One_race_Asian'},
                {Header: 'Native Hawaiian/Other Pacific Islander', accessor: 'Est_RACE_One_race_Native_Hawaiian_and_Other_Pacific_Islander'},
                {Header: 'Other', accessor: 'Est_RACE_One_race_Some_other_race'},
                {Header: 'Two or more races', accessor: 'Est_RACE_Total_population_Two_or_more_races'}],
            data: countyRaceData,
            friendly_name: 'County/Subdivision Race by Population',
            slug: 'race'
        };



        this.state = { data: {countyCounts: countyCounts, countyAge: countyAge, countyHH: countyHH, countyRace: countyRace}, selected: '', selected_report: '' }
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
                defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id
                    return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
                }}
                defaultSortMethod={(a, b, desc) => {
                    // force null and undefined to the bottom
                    a = (a === null || a === undefined) ? -Infinity : a
                    b = (b === null || b === undefined) ? -Infinity : b
                    // force any string values to lowercase
                    if (parseInt(a) === NaN || parseInt(b) === NaN) {
                        a = a === 'string' ? a.toLowerCase() : a
                        b = b === 'string' ? b.toLowerCase() : b
                    } else {
                        a = parseInt(a);
                        b = parseInt(b);
                    }
                    // Return either 1 or -1 to indicate a sort priority
                    if (a > b) {
                        return 1
                    }
                    if (a < b) {
                        return -1
                    }
                // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
                return 0
                }}
            />
        }
    }

    handleReport(report) {
        this.setState({selected_report: report});
    }


    getTotalCountsForData(selected_report) {
        if (this.state.data[this.state.selected_report].charts.barChart != '') {
            //<BarChart data={[]} size={[500,500]} />
        }
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
                            <button type="button" className="btn btn-info mr-2" onClick={this.handleReport.bind(this, 'countyRace')}>Race</button>
                            <button type="button" className="btn btn-info mr-2" onClick={this.handleReport.bind(this, 'countyAge')}>Age Counts</button>
                            <button type="button" className="btn btn-info mr-2" onClick={this.handleReport.bind(this, 'countyHH')}>Household</button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {this.renderReactTable()}
                    </div>
                    <div className="row mt-4">
                        { this.getTotalCountsForData.bind(this, this.state.selected_report) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;