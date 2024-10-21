import { Action } from "redux";
import { runSaga, Saga } from "redux-saga";
import { getMockAxiosResponse } from "../../../../../testingMock/common";
import { recordSaga } from "../../../../../testingMock/recordSaga";
import { PathStarWars } from "../../../../../utils/path/pathStarwars";
import * as api from "../../../../../utils/response/getDataStarWars";
import {
  getPeopleSuccess,
  peopleReducer,
  initialState,
  getPeopleFetchSaga,
  getPeopleFailure,
} from "../people.reducer";
import { workPeople } from "../people.sagas";
import { IPeople } from '../../../interface/people';

// export {};

describe("workPeople saga test", () => {
  let mockGetDataApi: jest.SpyInstance;

  beforeAll(() => {
    // mockGetDataApi создаем фиктивную функцию, которая будет отслеживаться
    // Отслеживается она в саге, которую подаем в runSaga
    mockGetDataApi = jest.spyOn(api, "getDataStarWars");
  });

  beforeEach(() => {
    // Имитируем, что getDataStarWars вернет мок, имитация происходит в recordSaga
    mockGetDataApi.mockImplementation(async () => {
      return {};
    });
  });

  afterEach(() => {
    mockGetDataApi.mockReset();
  });

  it('successful for path "/people"', async () => {
    // Ожидаем, что мок будет вызван с таким путем
    const path: string = PathStarWars.People;

    await recordSaga(workPeople);
    expect(mockGetDataApi).toBeCalledWith(path);
  });

  it("success action", async () => {
    // Сравниваем экшены
    const { actions } = await recordSaga(workPeople);
    const expectedActions = [getPeopleSuccess({})];
    expect(actions).toStrictEqual(expectedActions);
  });

  it("reducer fetch", () => {
    expect(peopleReducer(initialState, getPeopleFetchSaga)).toEqual({
      ...initialState,
      isLoad: true,
      isError: false
    });
  });

  it("reducer fetch after error", () => {
    const initialStateFetchAfterError: typeof initialState = { 
        people: {} as IPeople,
        isLoad: false, 
        isError: true        
      }
    expect(peopleReducer(initialStateFetchAfterError, getPeopleFetchSaga)).toEqual({
      ...initialState,
      isLoad: true,
      isError: false
    });
  });

  it("reducer success", () => {
    const initialStateFetch: typeof initialState = { 
        people: {} as IPeople,
        isLoad: true, 
        isError: false        
      }
    const action = {
      type: getPeopleSuccess.type,
      payload: {test: 1},
    };
    expect(peopleReducer(initialStateFetch, action)).toEqual({
      ...initialState,
      isLoad: false,
      people: action.payload
    });
  });

  it("reducer error", () => {
    const initialStateFetch: typeof initialState = { 
        people: {} as IPeople,
        isLoad: true, 
        isError: false        
      }

    expect(peopleReducer(initialStateFetch, getPeopleFailure)).toEqual({
      ...initialState,
      isLoad: false,
      isError: true
    });
  });

  it('should return the initial state', () => {
    expect(peopleReducer(undefined, {} as Action)).toEqual(initialState)
  })
 
});
