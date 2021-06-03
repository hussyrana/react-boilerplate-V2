import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header-content">
                <Link className="header-title" to="/dashboard" >
                     <h1>Boilerpalte-v2</h1>
                </Link>
                <button className="login-button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch)=>({
    startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);