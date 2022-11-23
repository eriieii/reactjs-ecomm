import React from 'react';

import Sidebar from './Footer';

const Footer = () => {

    return (
        <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
                <p>2021 &copy; Mazer</p>
            </div>
            <div className="float-end">
                <p>Crafted with <span className="text-danger"><i className="bi bi-heart"></i></span></p>
            </div>
        </div>        
    );
}

export default Footer;