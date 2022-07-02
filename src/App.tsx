import React, { useEffect, useState } from "react";
import { Container, Table, TableContainer } from "./styles";
import { PaginationData, User } from "./types";

function App() {
  const [data, setData] = useState<PaginationData<User>>();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const tableData = (await import("./getTableData")).default<User>({
        limit,
        offset,
      });
      setData(tableData);
    };
    getData();
  }, [limit, offset]);

  return (
    <Container>
     <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;

