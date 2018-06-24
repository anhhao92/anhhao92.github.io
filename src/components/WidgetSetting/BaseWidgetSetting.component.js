import React from 'react';
import { FaCog, FaArrowsAlt, FaClose } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DashboardActionCreator } from '../../actions/dashboard.action';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class BaseWidgetSetting extends React.PureComponent {

    render(){
        return (
        <Modal isOpen  className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet,  adipisicing elit, sed doriatur. Excepteur sint occaecat cupidatat non proiderum.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" >Save</Button>{' '}
                <Button color="secondary" >Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }
}