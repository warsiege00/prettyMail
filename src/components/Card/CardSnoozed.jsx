import React, { useState, useEffect }from 'react';
import  Mail  from '../Mail'


const CardSnoozed = () => (
    <div className="card snoozed">
        <div className="cardHeader row">
            <div class="col-1">
                <div className="snoozedIcon">
                    <i className="far fa-clock"></i>
                </div>
            </div>
            <div class="col-9">
                <div className="row">
                    <div className="col-12">
                        <span className="title">Snoozed</span>
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

export default CardSnoozed;