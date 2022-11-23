import React from 'react';

import '../../assets/dashboard/css/bootstrap.css';
import '../../assets/dashboard/css/app.css';
import '../../assets/dashboard/vendors/iconly/bold.css';
import '../../assets/dashboard/vendors/perfect-scrollbar/perfect-scrollbar.css';
import '../../assets/dashboard/vendors/bootstrap-icons/bootstrap-icons.css';

import Sidebar from './Sidebar';
import Footer from './Footer';

const Main = () => {

    return (
        <div id="app">
            <div id="sidebar" class="active">
                <Sidebar />
            </div>

            <div id="main">
                <div class="page-heading">
                    <h3>View Main</h3>
                </div>
                <div class="page-content">
                    
                </div>

                <footer>
                    <Footer />
                </footer>

            </div>
        </div>
    );
}

export default Main;