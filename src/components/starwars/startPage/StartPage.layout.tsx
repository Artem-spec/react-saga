import { Menu } from "./Menu/Menu.layout";
import { HelloPage } from "./HelloPage/HelloPage.layout";
import { Route, Switch, Link, useParams } from "react-router-dom";
import { People } from '../directory/People/People.container';
import { Planets } from '../directory/Planets/Planets.container';

export const StartPage = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" children={<HelloPage />} />
        <Route path="/directory/people" children={<People/>}/>
        <Route path="/directory/planets" children={<Planets/>}/>
      </Switch>
    </>
  );
};
