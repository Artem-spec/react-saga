import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PathStarWars } from "../../../../utils/path/pathStarwars";
import { getDataStarWars } from "../../../../utils/response/getDataStarWars";
import { IPeople, IPersonage } from '../../interface/people';
import { getPeopleFetchSaga, getPeopleSuccess } from './people.reducer';
import { RootState } from '../../../../app/store';
import { PeopleLayout } from "./People.layout";

export const People = () => {

  const dispatch = useDispatch();
  const people = useSelector<RootState, IPeople>((state) => state.peopleReducer.people );

  useEffect(() => {
    dispatch(getPeopleFetchSaga());
  }, [dispatch]);
  console.log(people);
  
  
  return (
    <>
      <PeopleLayout items={people.results}/>
    </>
  );
};
