import React from "react";
import {CardUnread, CardSnoozed, CardNewsletter} from '../../components/Card';

const MailList = ({mails}) => (
    <div className="mailList">                
        <CardUnread mails={mails}/>       
        <CardSnoozed mails={mails}/>
        <CardNewsletter mails={mails}/>
    </div>
);

export default MailList;