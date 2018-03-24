import React from 'react';
const BigQuery = require('@google-cloud/bigquery');

class Map extends React.Component {
    constructor(props) {
        super(props);
// Imports the Google Cloud client library

// Your Google Cloud Platform project ID
        const projectId = 'campaignanalytics-182101';

// Creates a client
        const bigquery = new BigQuery({
            projectId: projectId
        });

// The name for the new dataset
        const datasetName = 'ogdatabase';
        const dataset = bigquery.dataset(datasetName);
        dataset.get(function(err, dataset, apiResponse) {
            console.log('dataset: ', dataset);
            console.log('apiResponse: ', apiResponse);
            if (!err) {
                // `dataset.metadata` has been populated.
            }
        });

//-
// If the callback is omitted, we'll return a Promise.
//-
        dataset.get().then(function(data) {
            const dataset = data[0];
            const apiResponse = data[1];
        });
    }
    render() {
        return (
            <div className="Map">
                <h1>Maps</h1>
            </div>
        )
    }
}

export default Map;