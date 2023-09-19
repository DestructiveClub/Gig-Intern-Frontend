import React, { useMemo } from "react";
import Checkbox from "components/checkbox";
import Card from "components/card";
import avatar from "assets/img/avatars/avatar11.png";


import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const CheckTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-[24px] font-[700] text-black dark:text-white">
          Courses Your'e Taking
        </div>

      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-[18px] font-[700] tracking-wide text-black lg:text-xs">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "COURSE TITLE") {
                      data = (
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
                            {cell.value[0]}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "LESSONS COMPLETED") {
                      data = (
                        <div className="flex items-center">
                          <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
                            {cell.value}%
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "DURATION") {
                      data = (
                        <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
                          {" "}
                          {cell.value}{" "}
                        </p>
                      );
                    } else if (cell.column.Header === "FACILITATOR") {
                      data = (
                        <><div className="flex">
                          <><img src={avatar} className="h-[29px] w-[29px] rounded-full" />
                          <p className="ml-4 text-[15px] font-[400] text-gray-700 dark:text-white">
                            {cell.value}
                          </p></>
                          </div></>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CheckTable;
