import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";
import { ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridCom"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Filter,
            ContextMenu,
            PdfExport,
            Sort,
            Resize,
            Edit,
            ExcelExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
