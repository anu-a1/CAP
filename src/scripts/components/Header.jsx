import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

import LogoIcon from '../../icons/logo.png';


export class Header extends Component {

   /* static propTypes = {
        menuItems: PropTypes.array.isRequired
    };*/

    /*shouldComponentUpdate(nextProps) {
        return nextProps.location.pathname !== this.props.location.pathname;
    }*/

    render() {
        /*const {menuItems} = this.props;*/

        return (

            <div id="header" className="app__header" >
                <div className="header-div">
                    <table><tbody>
                    <tr>
                        <td width={150} className="image-div"><img src={LogoIcon} className="img-responsive" alt = "logotype"/></td>
                        <td width={1000}><h1>Accounting Portal</h1></td>
                        <td><h5>Welcome Anupama</h5></td>
                    </tr>
                    </tbody></table>



                    {/*<div width="30"><img src={LogoIcon} className="img-responsive" alt = "logotype"/></div>*/}
                    {/*<div width="100"><h1>Accounting Portal</h1></div>*/}
                    {/*<div width="30 "><h5>Welcome Anupama</h5></div>*/}
                </div>
            </div>


            /*<Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={LogoIcon} className="img-responsive" alt = "logotype"/>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <div>
                    <Nav>
                        {
                            menuItems.map((item, index) => (
                                <NavItemLink isDefault={item.isDefault} eventKey={index+1} key={index} to={`/${item.path}`}>
                                    {item.title}
                                </NavItemLink>
                            ))
                        }
                    </Nav>
                </div>

            </Navbar>*/
        );
    }
}

export default withRouter(Header);