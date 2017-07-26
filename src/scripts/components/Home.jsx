import React,{Component} from 'react';
import AllocationTable from "../containers/AllocationTable";
import {Nav,NavItem,TabContainer,TabContent,TabPane} from "react-bootstrap";





export default class Home extends Component
{
    render()
    {
        return(
            <div>
                <div id="div-right" className="div-home-right">
                    <p>EDW Last Feed: </p>
                    <p>Lawson Posting</p>
                </div>
                <div id="div-tab">
                    <TabContainer id="left-tabs-example"  defaultActiveKey="second">
                        <table><tbody>
                        <tr>
                            <td width = {220}>
                                <Nav bsStyle="pills" stacked >
                                    <NavItem eventKey="first">
                                        Home
                                    </NavItem>
                                    <NavItem eventKey="second">
                                        Allocations
                                    </NavItem>
                                </Nav>
                                <div id="buffer"></div>
                            </td>
                            <td width = {760}>
                                <TabContent animation>
                                    <TabPane eventKey="first">


                                    </TabPane>
                                    <TabPane eventKey="second">
                                        <AllocationTable />
                                    </TabPane>
                                </TabContent>
                            </td>
                        </tr>
                        </tbody></table>
                    </TabContainer>
                </div>
            </div>
        )
    }
}

