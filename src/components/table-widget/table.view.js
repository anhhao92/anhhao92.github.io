import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export const TableWidgetView = (props) => {
    return (
        <BootstrapTable 
        keyField='id' 
        data={props.data} 
        columns={props.columns} 
        pagination={paginationFactory(props.paginationConf)}
        bordered={false}
        striped
        hover
        condensed />
    )
}