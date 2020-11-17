import React, { useState, useEffect }from 'react';
import  Mail  from '../Mail'

const Card = () => (
    <div className="card unread">
        <div className="cardHeader row">
            <div class="col-1">
                <div className="unreadIcon">
                    <i className="far fa-envelope"></i>                    
                </div>
            </div>
            <div class="col-9">
                <div className="row">
                    <div className="col-12">
                        <span className="title">Inbox</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span className="mailAdress">praditaghani@gmail.com</span>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <i class="far fa-check-circle"></i>
            </div>
        </div>
        <div className="cardBody">
            <Mail />
            <Mail />
        </div>
    </div>
);

export default Card;