import { useState } from "react";

var W3CWebSocket = require('websocket').w3cwebsocket;
import { useStore } from "mobx-store-provider";

export default  () => {
    var client = new W3CWebSocket('ws://localhost:5001/', 'echo-protocol');
    const { alert } = useStore();
    client.onerror = function() {};
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            alert.showAlert(JSON.parse(e.data));
        }
    };
    return(
        <div>
            Страничка о нас
        </div>
    );
}