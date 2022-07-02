import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TableContainer = styled.div`
  width: 600px;
  height: 400px;
  overflow: auto;
`;

const Table = styled.table`
  width: 500px;
  border-collapse: collapse;
  position: relative;
  & th {
    text-align: left;
    background: #282560;
    font-weight: bold;
    color: white;
    border: 1px solid white;
    position: sticky;
  }
  & th,
  & td {
    padding: 0.3rem;
    font-size: 0.7rem;
  }
  & tbody tr:nth-child(even) {
    & td {
      background: #edeef6;
    }
  }
`;

export { Container, Table, TableContainer };
