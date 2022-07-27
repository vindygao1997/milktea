import './dashboard.css'
import './dashboardWholePageStyles.css'
import OrderTable from './OrderTable'
import React from "react";
import axios from "axios";

const AdminPage = () => {

    const [orders, setOrders] = React.useState([])

    const getData = () => {
      axios.get("/admin")
      .then(response => response.data) // got an array of arrays containing each row of info in db
      .then(r => setOrders(r))
    }
    
    React.useEffect( () => getData(), [])

    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Admin Portal</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                <a className="nav-link px-3" href="#">Sign out</a>
                </div>
            </div>
            </header>

            
        
            <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                        <span data-feather="home" className="align-text-bottom"></span>
                        Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="file" className="align-text-bottom"></span>
                        Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                        Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="users" className="align-text-bottom"></span>
                        Inventory
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2" class="align-text-bottom"></span>
                        Customers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="layers" className="align-text-bottom"></span>
                        Reports
                        </a>
                    </li>
                    </ul>
        
                    
                </div>
                </nav>
        
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar" class="align-text-bottom"></span>
                        This week
                    </button>
                    </div>
                </div>

                <OrderTable orderInfo={orders} />
                </main>

            </div>
            </div>
        </div>
        
    );
};

export default AdminPage;



