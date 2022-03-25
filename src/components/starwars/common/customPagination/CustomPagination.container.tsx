import {
  MouseEvent,
  MouseEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Pagination } from "react-bootstrap";
import { CustomPaginationLayout } from "./CustomPagination.layout";
interface IProps {
  firstIndex: number;
  lastIndex: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
export const CustomPagination = (props: IProps) => {
  const { firstIndex, lastIndex, currentIndex, setCurrentIndex } = props;
  const [index, setIndex] = useState<number>();

  useEffect(() => {
    if (currentIndex <= firstIndex) {
      setIndex(firstIndex);
    } else if (currentIndex > firstIndex) {
      if (currentIndex <= lastIndex - 1) {
        setIndex(currentIndex - 1);
      } else if (currentIndex > lastIndex) {
        setIndex(lastIndex - 1);
      }
    }
  }, [currentIndex]);

  const handleClick = (event: MouseEvent<HTMLLinkElement>) => {
    const value = parseInt(event.currentTarget.textContent as string);
    if (value >= 1) {
      setCurrentIndex(value);
    } else if (value < 1) {
      setCurrentIndex(firstIndex);
    } else if (value >= lastIndex) {
      setCurrentIndex(lastIndex);
    }
  };
  return (
    <CustomPaginationLayout
      firstIndex={firstIndex}
      lastIndex={lastIndex}
      currentIndex={currentIndex}
      index={index}
      handleClick={handleClick}
    />
  );
};
