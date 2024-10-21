import { Card } from "react-bootstrap";
import { IPlanet } from "../../../interface/planet";

interface IComponentProps {
  item: IPlanet;
}

export const PlanetLayout = (props: IComponentProps) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "5px" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
    </>
  );
};
