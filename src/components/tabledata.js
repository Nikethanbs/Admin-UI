import React from "react";
import { useTableLogic } from "./useTableLogic";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { handleDeleteSelected } from "./DeleteSelected";
import Table from "./table";
import "./tabledata.css";

const DataTable = () => {
  const {
    data,
    currentPage,
    searchTerm,
    selectedRows,
    editingRow,
    currentItems,
    totalPages,
    hasResults,
    handlePaginationClick,
    handleSearch,
    handleRowSelect,
    handleEdit,
    handleEditRow,
    handleSaveEdit,
    setEditingRow,
    handleDelete,
    setData,
    setSelectedRows,
  } = useTableLogic();

  const handleDeleteSelectedItems = () => {
    const updatedData = handleDeleteSelected(
      data,
      selectedRows,
      setData,
      setSelectedRows
    );
    setData(updatedData);
    setSelectedRows([]);
  };

  return (
    <div className="data-table-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      {!hasResults && <p>No results found for '{searchTerm}'.</p>}

      <Table
        data={currentItems}
        selectedRows={selectedRows}
        editingRow={editingRow}
        onRowSelect={handleRowSelect}
        onRowhandleEdit={handleEdit}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={setEditingRow}
        onEditRow={handleEditRow}
        onDeleteRow={handleDelete}
      />
      <div className="actions-container">
        <button className="delete-selected" onClick={handleDeleteSelectedItems}>
          Delete Selected
        </button>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageClick={handlePaginationClick}
        />
      </div>
    </div>
  );
};

export default DataTable;
