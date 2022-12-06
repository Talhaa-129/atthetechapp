import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/icons.css";
import "@/css/preset.css";
import "@/css/theme.css";
import "@/css/responsive.css";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import myreducer from "../store/myreducer";
import homeSaga from "../store/mysaga";
import { useRouter } from "next/router";
import { pageview } from "lib/ga";
import { useEffect } from "react";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: myreducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(homeSaga);

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }
    router.events.on('routerChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routerChangeComplete', handleRouteChange)

    }
  }, [router.events])


  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
