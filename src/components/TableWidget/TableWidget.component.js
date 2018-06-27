import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux'
import { fetchDataSource } from '../../actions/dataSource.action'

class TableWidget extends React.PureComponent {

    getDataSource() {
        const { data, configs } = this.props;
        const dataType = configs.dataSource.toLowerCase();
        const result = data && data[dataType];
        return result ? result : false;
    }

    componentWillMount(){
        if(!this.getDataSource()){
            this.props.dispatch(fetchDataSource(this.props.configs.dataSource))
        }
    }

    render(){
        const data = this.getDataSource();
        const displayColumns = [{
            dataField: 'id',
            text: 'ID',
            headerStyle: { width: 40 }
          }, {
            dataField: 'employeeId',
            text: 'Name',
            formatter: (cell, row) => {
                return `${row.firstName} ${row.lastName}`
            }
          }, {
            dataField: 'title',
            text: 'Title',
            headerStyle: { width: '30%' }
        }];
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
            columns={displayColumns} 
            pagination={paginationFactory(paginationConf)}
            bordered={false}
            striped
            hover
            condensed 
            />
    }
}

const mapStateToProps = state => ({
    data: state.dataSource
})

export default connect(mapStateToProps)(TableWidget)