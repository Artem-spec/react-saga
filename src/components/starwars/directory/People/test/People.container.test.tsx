import { AnyAction, EnhancedStore, Store } from "@reduxjs/toolkit";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
import { getPersonageMock } from "../../../../../testingMock/people";
import { getActionsHistoryStore } from "../../../../../testingMock/reduxSaga";
import { People } from "../People.container";
import { getPeopleFetchSaga, getPeopleSuccess } from "../people.reducer";
import { getCommonMock } from "../../../../../testingMock/common";
import { IPeople } from "../../../interface/people";
import { PathStarWars } from "../../../../../utils/path/pathStarwars";
import configureStore from "redux-mock-store";

describe("People.contaiter", () => {
  // const mockStore = configureStore();
  // let store: Store<any, AnyAction>

  const people = {
    ...getCommonMock(),
    results: [getPersonageMock()],
  } as IPeople;

  const getStore = () => {
    const {actions, store, errors} = getActionsHistoryStore();
    return {actions, store, errors};
};
  const renderWithStore = (store: Store<any, AnyAction>) =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[PathStarWars.People]}>
          <Route path={PathStarWars.People} component={People} />
        </MemoryRouter>
      </Provider>
    ); 

  beforeEach(() => {
    // store = mockStore({});    
  });

  // it("initial data loading", () => {
  //   const { actions, store } = getStore();
  //   renderWithStore(store);
  //   console.log(store);

  //   const expectedActions: any[] = [];

  //   console.log(actions);

  //   expect(actions).toStrictEqual(expectedActions);
  // });

  it("data rendering", async () => {
    const {store} = getStore();
    const state = {
      peopleReducer: {
        ...people,
      },
    }; 
    store.dispatch(getPeopleSuccess(people))
    const container = renderWithStore(store);
    expect(container.asFragment()).toMatchSnapshot();

});
});
