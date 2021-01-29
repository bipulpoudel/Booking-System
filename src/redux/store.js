import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "@redux/reducers";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "Pro",
  storage,
  whitelist: ["userData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = (context) => {
  const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
      const { composeWithDevTools } = require("redux-devtools-extension");
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
  };

  const middleware = [thunk];

  const store = createStore(persistedReducer, bindMiddleware(middleware));

  store.__persistor = persistStore(store);

  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
