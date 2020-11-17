import React, { useState, useEffect } from "react";
import Inbox from "../../containers/Inbox"

const InboxRoute = () => {
    const [mails, setMails] = useState([]); 

    const arrayMails = [
        {
        "Title": "Role marcado",
        "Message": "Nao esquece!!!!",
        "Date": "12/05/2020",
        "UserSender": [{
            "Name":"Kelly Dorr", 
            "AvatarImg": "http://"
            }],
        "unread": "true",
        "snoozed": "false",
        "newsletter": "false",
        },
        {
        "Title": "Projeto pago",
        "Message": "HAH SIM aushah hehau ekog glkfog0df",
        "Date": "22/04/2020",
        "UserSender": [{
            "Name":"Jose silva", 
            "AvatarImg": "http://"
            }],
        "unread": "true",
        "snoozed": "false",
        "newsletter": "false",    
        },
    ];

    useEffect(() => {
        setMails(arrayMails);
    }, []);

    return(        
        <Inbox />
    );
}

export default InboxRoute;