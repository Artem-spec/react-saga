import { MouseEvent, useState } from "react";
import { Pagination } from "react-bootstrap";
interface IProps {
  firstIndex: number;
  lastIndex: number;
  currentIndex: number;
  index: number | undefined;
  handleClick: (event: MouseEvent<HTMLLinkElement>) => void;
}
export const CustomPaginationLayout = (props: IProps) => {
  const { firstIndex, lastIndex, currentIndex, index, handleClick } = props;

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item onClick={handleClick}>{firstIndex}</Pagination.Item>
      <Pagination.Ellipsis />
      {index && (
        <Pagination.Item onClick={handleClick} active={currentIndex === index}>
          {index}
        </Pagination.Item>
      )}
      {index && (
        <Pagination.Item
          onClick={handleClick}
          active={currentIndex === index + 1}
        >
          {index && index + 1}
        </Pagination.Item>
      )}
      {index && (
        <Pagination.Item
          onClick={handleClick}
          active={currentIndex === index + 2}
        >
          {index && index + 2}
        </Pagination.Item>
      )}

      <Pagination.Ellipsis />
      <Pagination.Item onClick={handleClick}>{lastIndex}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};
