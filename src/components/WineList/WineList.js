import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class WineList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.wines}>
          <TableHeaderColumn dataField="id" isKey={true}>
            ID{" "}
          </TableHeaderColumn>
          <TableHeaderColumn dataField="wine_name">Name</TableHeaderColumn>
          <TableHeaderColumn dataField="varietal">Varietal</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
          <TableHeaderColumn dataField="description">
            Description
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default WineList;
