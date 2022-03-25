import { createBrowserHistory } from "history";

export type historyType = ReturnType<typeof createBrowserHistory>;

export const history = createBrowserHistory();
