import { Table as AntTable } from "antd";
import React from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

interface TableProps {
  data: {
    head: Array<string>;
    body: Array<Array<string>>;
  };
}

export const Table: React.FC<TableProps> = ({ data }) => {
  //   return (
  //     <table>
  //       <thead>
  //         {data.head.map((value: String) => (
  //           <td>{value}</td>
  //         ))}
  //       </thead>
  //       <tbody>
  //         {data.body.map((row: Array<String>) => (
  //           <tr>
  //             {row.map((value: String) => (
  //               <td>{value}</td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   );

  return <AntTable dataSource={dataSource} columns={columns} />;
};
