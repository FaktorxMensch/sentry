import React from "react";
import Page from "./Components/Page";
import {
  loadCache,
  setIP,
  createMainSocket,
  createUpdateSocket,
  connectSocket,
  connectUpdateSocket,
  connectionClosed,
  connectionLost,
    dummyEverything,
} from "./Store/Actions/creators";
import { store } from "./Store";
import { Provider } from "react-redux";

function App() {
  store.dispatch(loadCache());
  store.dispatch(setIP(window.location.hostname));
  setTimeout(() => {

    console.log('creating main socket')
    store.dispatch(
      createMainSocket(
        () => store.dispatch(connectionLost()),
        () => store.dispatch(connectionClosed())
      )
    );
    store.dispatch(createUpdateSocket());
    store.dispatch(connectSocket());
    store.dispatch(connectUpdateSocket());
    store.dispatch(dummyEverything()); // TODO dummy things like stream and stuff
  }, 500);

  return (
      <Provider store={store}>
        <Page></Page>
      </Provider>
  );
}

export default App;
