import { AddAlert } from "@material-ui/icons";
import { useCreateStore, useProvider } from "mobx-store-provider";
import AlertComponent from "../components/Alert";
import Header from "../components/Header";
import NavigationPanel from '../components/NavigationPanel';
import menuStore from '../stores/menu-store';
import postsStore from '../stores/posts-store';
import alertStore from '../stores/alert-store';
import '../styles/globals.css';
var W3CWebSocket = require('websocket').w3cwebsocket;
const MyApp = ({ Component, pageProps }) => {
  const appStore = useCreateStore(() => ({
    menu: menuStore,
    postsStore,
    alert: alertStore
  }));
  var client = new W3CWebSocket('ws://localhost:5001/', 'echo-protocol');
  client.onerror = function() {};
  client.onmessage = function(e) {
      if (typeof e.data === 'string') {
        alertStore.showAlert(JSON.parse(e.data));
      }
  };
  const Provider = useProvider();
  return (
    <Provider value={appStore}>
      <Header />
      <AlertComponent />
      <NavigationPanel />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
