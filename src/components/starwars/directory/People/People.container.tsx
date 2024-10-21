import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PathStarWars } from "../../../../utils/path/pathStarwars";
import { getDataStarwars } from "../../../../utils/response/getDataStarWars";
import { IPeople, IPersonage } from '../../interface/people';
import { getPeopleFetch, getPeopleSuccess } from './people.reducer';
import { RootState } from '../../../../app/store';
import { PeopleLayout } from "./People.layout";

export const People = () => {

  const dispatch = useDispatch();
  const people = useSelector<RootState, IPeople>((state) => state.peopleReducer.people );

  useEffect(() => {
    dispatch(getPeopleFetch());
  }, [dispatch]);
  
  return (
    <>
      <PeopleLayout items={people.results}/>
    </>
  );
};
