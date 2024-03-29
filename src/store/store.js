
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit"

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["cart", "user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }).concat(middleWares)
});

export const persistor = persistStore(store);
