export const DataSourceCreator = {
    fetchDataSource: (dataSource) => {
        return {
            type: 'FETCH_DATA_SOURCE',
            data: dataSource
        }
    }
}

export const fetchDataSource = type => dispatch => {
    let dataType = '';
    let dataResult = {};
    switch (type) {
        case 'Contacts':
            dataType = 'contacts';
            break;
        default:
            dataType = 'contacts';
            break;
    }

    fetch(`/api/${dataType}/`)
    .then(res => res && res.json())
    .then((data)  => {
        dataResult[dataType] = data
        dispatch(DataSourceCreator.fetchDataSource(dataResult))
    },
    error => console.log(error));
} 