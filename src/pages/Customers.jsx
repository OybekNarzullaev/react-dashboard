import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Sort,
  Filter,
  Search,
  Page,
  Edit,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Filter, Sort, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
