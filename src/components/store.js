import AsyncStorage from "@react-native-async-storage/async-storage";
import { spawn } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "../redux/reducer";
import { watchSignup } from "../redux/actions";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield spawn(watchSignup);
}

const rootReducer = combineReducers({
  signup: reducer,
});

const persistConfig = {
  key: "root",
  whitelist: ["signup"],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
