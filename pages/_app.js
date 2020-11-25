import { AddAlert } from "@material-ui/icons";
import { useCreateStore, useProvider } from "mobx-store-provider";
import Header from "../components/Header";
import NavigationPanel from '../components/NavigationPanel';
import menuStore from '../stores/menu-store';
import postsStore from '../stores/posts-store';
import '../styles/globals.css';
const MyApp = ({ Component, pageProps }) => {
  const appStore = useCreateStore(() => ({
    menu: menuStore,
    postsStore
  }));
  const Provider = useProvider();
  return (
    <Provider value={appStore}>
      <Header />
      <NavigationPanel />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
