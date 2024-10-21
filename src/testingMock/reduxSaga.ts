import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../app/store";
import { AnyAction, Middleware, MiddlewareAPI, Dispatch } from 'redux'

export const getStoreWithoutSagas = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({})],
    });

export const createActionHistoryMiddleware = (actions: AnyAction[], errors: any[]): Middleware => {
    return (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
        actions.push(action);
        try {
            return next(action);
        } catch (error) {
            errors.push(error);
            throw error;
        }
    };
};
export const getActionsHistoryStore = () => {
    const actions: AnyAction[] = [];
    const errors: any[] = [];

    const actionsHistoryMiddleware = createActionHistoryMiddleware(actions, errors);
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [actionsHistoryMiddleware, ...getDefaultMiddleware({})],
    });
    return {store, actions, errors};
};