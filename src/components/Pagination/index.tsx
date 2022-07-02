import React, { Fragment } from "react";
import Select from "react-select";
import {
  AllLeft,
  AllRight,
  Container,
  Left,
  Page,
  PageContainer,
  PageInfo,
  Right,
} from "./styles";

interface PProps {
  limit: number;
  offset: number;
  total?: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent: React.FC<PProps> = ({
  limit,
  offset,
  total,
  setLimit,
  setOffset,
}) => {
  if (typeof total !== "number") {
    return <Container>Loading...</Container>;
  }
  const limitOptions = [10, 20, 30, 40, 50].map((value) => ({
    value,
    label: `${value} per page`,
  }));
  const from = Math.min(offset + 1, total);
  const to = Math.min(offset + limit, total);
  const pageCount = Math.ceil(total / limit);
  const currentPage = offset / limit + 1;
  const highestPossibleOffset = limit * (pageCount - 1);
  const pageArray = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= pageCount);
  return (
    <Container>
      <PageInfo>
        Showing {from} to {to} of {total} items
        <Select
          options={limitOptions}
          value={limitOptions.find((v) => v.value === limit)}
          onChange={(v) => {
            setLimit(v?.value || 10);
            setOffset(0);
          }}
        />
      </PageInfo>
      {total > 0 && (
        <PageContainer>
          <Left onClick={() => setOffset(0)} />
          <AllLeft
            onClick={() => setOffset((prev) => Math.max(prev - limit, 0))}
          />
          {!pageArray.includes(1) && (
            <Fragment>
              <Page
                isActive={currentPage === 1}
                onClick={() => {
                  setOffset(0);
                }}
              >
                1
              </Page>
              <div>...</div>
            </Fragment>
          )}
          {pageArray.map((page) => {
            return (
              <Page
                isActive={page === currentPage}
                onClick={() => {
                  setOffset(limit * (page - 1));
                }}
              >
                {page}
              </Page>
            );
          })}
          {!pageArray.includes(pageCount) && (
            <Fragment>
              <div>...</div>
              <Page
                isActive={currentPage === pageCount}
                onClick={() => {
                  setOffset(highestPossibleOffset);
                }}
              >
                {pageCount}
              </Page>
            </Fragment>
          )}
          <AllRight
            onClick={() =>
              setOffset((prev) => Math.min(prev + limit, highestPossibleOffset))
            }
          />
          <Right onClick={() => setOffset(highestPossibleOffset)} />
        </PageContainer>
      )}
    </Container>
  );
};

export default PaginationComponent;