import React from 'react';
import {Button} from "react-bootstrap";
import {CSVLink} from "react-csv";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
//import {exceljs} from 'exceljs'

import ExcelIcon from '../../icons/Excel.png';
import {fetchFIGGENAllocations} from '../actions/index';



class AllocationTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { allocations: [{}]};
    }



    componentDidMount()
    {

        // fetch('/figgen/GetCalculatedAllocations')
        //     .then( (response) => {
        //         return response.json() })
        //     .then( (json) => {
        //         console.log(json);
        //         this.setState({allocations: json[0]});
        //     });
    }

    // figgenPA()
    // {
    //     fetch('/figgen/CalculateAllocations')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //
    //             if (json.Success){
    //
    //             }
    //         });
    // }

    render() {
        let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)

        return (

            <div className="container-blue" >

                {/*<Modal isOpen={this.state.modalIsOpen} className = 'alloc_modal' contentLabel="Modal">*/}
                    {/*<h5>Calculating Allocations </h5>*/}
                    {/*{this.state.closeButtonDisplay ? <button onClick={this.closeModal}>close</button> : null}*/}
                {/*</Modal>*/}

                <div>
                    <div className="float-left" >
                        <h5>FIGGEN</h5>
                        <table><tbody>
                            <tr>
                                <td><Button bsStyle = "primary" bsSize = "large" onClick = {this.test}>Prepare </Button> </td>
                                <td width={20}></td>

                                <td><CSVLink data = {this.props.FIGGEN} onClick = {this.props.fetchFIGGENAllocations}>{<img src={ExcelIcon} alt="logotype" />}</CSVLink></td>
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


function mapStateToProps({FIGGEN})
{
   console.log(FIGGEN);
    return {FIGGEN};//FIGGEN is from combined reducer //ES^ syntax for FIGGEN
}

// function mapDispatchToProps(dispatch)
// {
//     //console.log(figgenAllocations1());
//     return bindActionCreators(fetchFIGGENAllocations(dispatch)); //fetchFIGGENAllocations is action creator. Dispatch makes the action flow to reducer
// }

const mapDispatchToProps = (dispatch) => ({
    fetchFIGGENAllocations: () => dispatch(fetchFIGGENAllocations())


});

export default connect(mapStateToProps,mapDispatchToProps) (AllocationTable);