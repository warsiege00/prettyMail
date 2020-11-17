import React from "react";
import MailList from "../MailList";
import Search from "../Search";
import Routes from "../../routes/index";


const MailBoard = () => (   
        
    <div className="mailBoard col-7">       
        <Search />   
        <Routes />
    </div>
);

export default MailBoard;