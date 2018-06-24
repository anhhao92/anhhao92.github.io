export const SimpleChartAction = {
    'FETCH_REPORT': 'FETCH_REPORT'
}

export const SimpleChartActionCreator = {
    fetchDataReport: (report) => {
        return {
            type: SimpleChartAction.FETCH_REPORT,
            data: report
        }
    }
}

export const fetchDataReport = (source, field) => dispatch => {
    const dataType = source.toLowerCase();
    const dataField = field.toLowerCase();
    fetch(`/api/reports/_countby/${dataType}/${dataField}`)
    .then(res => res && res.json())
    .then((data)  => {
        const result = Object.keys(data).map((key) => ({name: key, y: data[key]}))
        dispatch(SimpleChartActionCreator.fetchDataReport(result));
    },
    error => console.log(error));
} 