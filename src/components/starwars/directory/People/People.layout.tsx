import { IPersonage } from "../../interface/people";
import { Personage } from "./item/Personage.container";
interface IComponentProps {
  items: IPersonage[];
}

export const PeopleLayout = (props: IComponentProps) => {
  const { items } = props;

  return (
    <ul>
      {/* Index т.к. нет добавления удаления, модификации элементов */}
      {items?.map((item, index) => {
        return <Personage key={index} item={item} />;
      })}
    </ul>
  );
};
