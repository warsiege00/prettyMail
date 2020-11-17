import React, { useState, useEffect }from 'react';
import  Mail  from '../Mail'


const CardNewsletter = () => (
    <div className="card newsletter">
        <div className="cardHeader row">
            <div class="col-1">
                <div className="snoozedIcon">
                    <i class="far fa-newspaper"></i>
                </div>
            </div>
            <div class="col-9">
                <div className="row">
                    <div className="col-12">
                        <span className="title">Newsletter</span>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <i class="far fa-check-circle"></i>
            </div>
        </div> <div className="cardBody">
            <Mail />
            <Mail />
        </div>
    </div>
);

export default CardNewsletter;