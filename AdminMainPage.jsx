import React, { } from "react";
 
import {Link} from 'react-router-dom';
import './adminMain.css'
 
export default function AdminMainPage(){
 
  return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <h1>Admin screen</h1>
                    <p><Link to="/admin_users" className="btn btn-success">Manage Users</Link></p>
                    <p><Link to="/admin_prof" className="btn btn-success">Manage professions</Link></p>
                </div>
            </div>
        </div>
    </div>
  );
}