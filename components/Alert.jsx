import React from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { Alert, AlertTitle } from '@material-ui/lab';

const AlertComponent = () => {
    const { alert } = useStore();
    if(!alert.alertShow) return <></>
    return(
        <Alert variant="filled" severity={alert.type}>
            <AlertTitle>{alert.alertTitle}</AlertTitle>
            {alert.alertText}
        </Alert>
    );
}

export default observer(AlertComponent);