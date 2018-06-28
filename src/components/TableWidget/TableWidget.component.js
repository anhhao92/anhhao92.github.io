import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux'
import { fetchDataSource } from '../../actions/dataSource.action'
import { getDataSource, getDisplayedColumns } from '../../selectors/dataTable.selectors'

class TableWidget extends React.PureComponent {

    componentWillMount(){
        const {data, configs, dispatch} = this.props;
        if(!data){
            dispatch(fetchDataSource(configs.dataSource))
        }
    }

    render(){
        const { data, displayedColumns } = this.props;
        const paginationConf = {
            sizePerPage: 5,
            showTotal: true,
            alwaysShowAllBtns: true,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true,
            paginationTotalRenderer: (from, to, size) => { 
              return <span>{from} to {to} of {size} {this.props.configs.dataSource}</span>
            }  
        }
        return !data 
        ? <div className="box-view">No data to display</div>
        : <BootstrapTable 
            keyField='id' 
            data={data} 
            columns={displayedColumns} 
            pagination={paginationFactory(paginationConf)}
            bordered={false}
            striped
            hover
            condensed 
            />
    }
}

const mapStateToProps = (state, props) => ({
    data: getDataSource(state, props),
    displayedColumns: getDisplayedColumns(state, props)
})

export default connect(mapStateToProps)(TableWidget)