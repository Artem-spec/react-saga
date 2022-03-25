import { runSaga, Saga } from "redux-saga";
import { Action } from "redux";
import { workPeople } from "../components/starwars/directory/People/people.sagas";
import { CallEffect } from "redux-saga/effects";

interface IRecordSagaResult {
  actions: Action[];
  errors: Error[];
}
type TGeneratorSaga<Args extends any[] = any[]> = (...args: Args) => Generator<any>;

export async function recordSaga(saga: Saga<any[]> | TGeneratorSaga<any[]>, initialAction?: Action): Promise<IRecordSagaResult> {
  const actions: Action[] = [];
  const errors: Error[] = [];
  await runSaga(
    {
      dispatch: (action: Action) => actions.push(action),
      onError: (error) => errors.push(error),
      getState: () => ({ value: "test" }),
    },
    workPeople as Saga<any[]>
  ).toPromise();

  return { actions, errors };
}
