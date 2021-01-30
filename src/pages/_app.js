import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@constants/theme";

//Redux imports
import { PersistGate } from "redux-persist/integration/react";
import wrapper from "@redux/store";
import { useStore } from "react-redux";

//react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const store = useStore(pageProps.initialReduxState);

  //getting the layout for the pages
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  //if component has layout then assign layout else same as children

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PersistGate
          persistor={store.__persistor}
          loading={<div>Loading...</div>}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
        <ToastContainer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default wrapper.withRedux(App);
