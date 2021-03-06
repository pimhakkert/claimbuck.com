import {NavLink} from "react-router-dom";
import React from "react";
import './css/navbar.css'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Navbar extends React.Component {

    logout() {
        cookies.remove('cookieusername');
        cookies.remove('cookieauthtoken');
        window.location = '/landingpage.html';
    }

    render() {
        return (

            <div className="navbar">
                <ul className={'navItems'}>
                    <NavLink to={'/'} exact={true} className={'navLinkHome'} activeClassName={'navLinkHomeActive'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={'/earn'} className={'navLinkEarn'} activeClassName={'navLinkEarnActive'}>
                        <li>Earn</li>
                    </NavLink>
                    <NavLink to={'/redeem'} className={'navLinkRedeem'} activeClassName={'navLinkRedeemActive'}>
                        <li>Redeem</li>
                    </NavLink>
                    <NavLink to={'/social'} className={'navLinkSocial'} activeClassName={'navLinkSocialActive'}>
                        <li>Social</li>
                    </NavLink>
                    <NavLink to={'/help'} className={'navLinkHelp'} activeClassName={'navLinkHelpActive'}>
                        <li>Help</li>
                    </NavLink>
                    <li className={'navLinkLogout'} onClick={this.logout}>Logout</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;