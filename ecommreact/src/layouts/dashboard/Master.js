import React from 'react';

import '../../assets/dashboard/css/styles.css';
import '../../assets/dashboard/js/scripts';


import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Master = () => {

    return (
        <div class="sb-nav-fixed">
             <Navbar />
             <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <h3>Main Master</h3>
                    </main>
                    <Footer />
                </div>


             </div>
        </div>

    );
}

export default Master;