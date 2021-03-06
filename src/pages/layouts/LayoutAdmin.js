import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'
import '../../assets/css/admin/sb-admin-2.min.css'
import '../../assets/css/admin/main.scss'







export default ({ children }) => {
    return (
        <div className="admin-page">
            <div id="wrapper">
                <Sidebar/>
                
                <div id="content-wrapper" className="d-flex flex-column">
                <Topbar></Topbar>
               
           
                    <div id="content">
                      
                        <div className="container-fluid">
                            {children}
                           
                        </div>
                        
                    </div>
                   
                    <Footer />
                </div>
            </div>
        </div>
    )
}

