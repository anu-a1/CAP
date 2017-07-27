import React from 'react';
import {bindActionCreators} from 'redux';
import {Button} from "react-bootstrap";
import {CSVLink} from "react-csv";
import {connect} from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
//import {exceljs} from 'exceljs'

import ExcelIcon from '../../icons/Excel.png';
import {getFIGGENAllocations,postFIGGENAllocations} from '../actions/actions';



class AllocationTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {modalIsOpen: false};

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.onPostFIGGENAllocations = this.onPostFIGGENAllocations.bind(this);
    }

    onPostFIGGENAllocations(event){
        event.preventDefault();
        this.openModal();
        this.props.postFIGGENAllocations();
        this.closeModal();
    };

    openModal() {
        this.setState({modalIsOpen: true});
        console.log('inside open modal');
    }

    closeModal() {
        this.setState({modalIsOpen: false});
        console.log('inside close modal');
    }

    componentDidMount()
    {
        this.props.getFIGGENAllocations();
    }

    render() {
        const {FIGGEN} = this.props;
        console.log(this.props);
        return (

            <div className="container-blue" >

                <div>use this data: {JSON.stringify(FIGGEN)}</div>

                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Allocations Modal"
                >
                    <h2>Calculating Allocations</h2>
                    <button onClick={this.closeModal}>close</button>

                </Modal>

                <div>
                    <div className="float-left" >
                        <h5>FIGGEN</h5>
                        <table><tbody>
                            <tr>
                                <td><Button onClick = {this.onPostFIGGENAllocations} bsStyle="primary" bsSize="large">Prepare </Button> </td>
                                <td width={20}></td>
                                <td><CSVLink data = {[]}>{<img src={ExcelIcon} alt="logotype" />}</CSVLink></td>
                                <td width={60}></td>
                                <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.figgenPA}>Calculate </Button> </td>
                                <td width={20}></td>
                                <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                                <td width={60}></td>
                                <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Update </Button> </td>
                                <td width={20}></td>
                                <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                                <td width={60}></td>
                            </tr>
                            <tr>
                                <td className="last-run-text">Last Run </td>
                                <td width={20}></td><td></td><td width={60}></td>
                                <td className="last-run-text">Last Run </td>
                                <td width={20}></td><td></td><td width={60}></td>
                                <td className="last-run-text">Last Run </td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div className="float-left" >
                        <h5>CORP</h5>
                        <table><tbody>
                        <tr>
                            <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Prepare </Button> </td>
                            <td width={20}></td>
                            <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                            <td width={60}></td>
                            <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Calculate </Button> </td>
                            <td width={20}></td>
                            <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                            <td width={60}></td>
                            <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Update </Button> </td>
                            <td width={20}></td>
                            <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                            <td width={60}></td>
                        </tr>
                        <tr>
                            <td className="last-run-text">Last Run </td>
                            <td width={20}></td><td></td><td width={60}></td>
                            <td className="last-run-text">Last Run </td>
                            <td width={20}></td><td></td><td width={60}></td>
                            <td className="last-run-text">Last Run </td>
                        </tr>
                        <tr height={30}/>
                        </tbody></table>
                    </div>
                    <div></div>
                    <div className="float-left" >
                        <h5>PCP</h5>
                        <table><tbody>
                        <tr>
                            <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Prepare </Button> </td>
                            <td width={20}></td>
                            <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                            <td width={60}></td>
                            <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Calculate </Button> </td>
                            <td width={20}></td>
                            <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                            <td width={60}></td>
                            <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Update </Button> </td>
                            <td width={20}></td>
                            <td>{<img src={ExcelIcon} alt="logotype" />}</td>
                            <td width={60}></td>
                        </tr>
                        <tr>
                            <td className="last-run-text">Last Run </td>
                            <td width={20}></td><td></td><td width={60}></td>
                            <td className="last-run-text">Last Run </td>
                            <td width={20}></td><td></td><td width={60}></td>
                            <td className="last-run-text">Last Run </td>
                        </tr>
                        </tbody></table>
                    </div>
                </div>
            </div>
        );
    };
}


function mapStateToProps({FIGGEN}) {
    return {
        FIGGEN//FIGGEN is from combined reducer //ES^ syntax for FIGGEN
    };
}

const mapDispatchToProps = {
    postFIGGENAllocations,
    getFIGGENAllocations
};

export default connect(mapStateToProps, mapDispatchToProps) (AllocationTable);
