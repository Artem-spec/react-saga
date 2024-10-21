import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSagas";
import peopleSaga from "../components/starwars/directory/People/people.sagas";
import planetsSaga from '../components/starwars/directory/Planets/planets.sagas';
import { peopleReducer } from "../components/starwars/directory/People/people.reducer";
import { planetsReducer } from "../components/starwars/directory/Planets/planets.reducer";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history, historyType } from './history';

const sagaMiddleware = createSagaMiddleware();

// const createRootReducer = (history: any) => combineReducers({
//   // router: connectRouter(history),
//   // peopleReducer,
//   // planetsReducer,
//   rootReducer
// })

// const rootReducer = () => combineReducers({
//   peopleReducer,
//   planetsReducer
// })

export const rootReducer = combineReducers({
  peopleReducer,
  planetsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  
  middleware: (getDefaultMiddleware) => [
    // Для чего? Набор дефолтных посредников, возвращаемый `getDefaultMiddleware()`
    // ...getDefaultMiddleware({
    //     thunk: false
    // }),
    routerMiddleware(history),
    sagaMiddleware,
  ],
  devTools: true
});

// промежуточный слой (Saga middleware) со списком наших Саг
// Запуск нашей Саги
// sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
