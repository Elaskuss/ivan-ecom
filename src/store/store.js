// import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const { configureStore } = require("@reduxjs/toolkit");

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// const persistConfig = {
//    key: "root",
//    storage,
//    whitelist: ["cart"]
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const persistor = persistStore(store);

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }).concat(middleWares)
});
