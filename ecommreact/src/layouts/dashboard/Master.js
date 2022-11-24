import React from 'react';
// import {Routes, Route, Navigate} from "react-router-dom";
import '../../assets/dashboard/css/styles.css';
import '../../assets/dashboard/js/scripts';


import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import routes from '../../routes/routes';

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

                        {/* <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route 
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Navigate from="dashboard" to="/dashboard" />
                        </Routes> */}

                    </main>
                    <Footer />
                </div>


             </div>
        </div>

    );
}

export default Master;