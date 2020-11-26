import { AddAlert } from "@material-ui/icons";
import { useCreateStore, useProvider } from "mobx-store-provider";
import AlertComponent from "../components/Alert";
import Header from "../components/Header";
import NavigationPanel from '../components/NavigationPanel';
import menuStore from '../stores/menu-store';
import postsStore from '../stores/posts-store';
import alertStore from '../stores/alert-store';
import '../styles/globals.css';
const MyApp = ({ Component, pageProps }) => {
  const appStore = useCreateStore(() => ({
    menu: menuStore,
    postsStore,
    alert: alertStore
  }));
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
