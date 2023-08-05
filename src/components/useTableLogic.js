import { useState, useEffect } from "react";
import { fetchData } from "./data";

export const useTableLogic = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [editingRow, setEditingRow] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (itemId) => {
    setData(data.filter((item) => item.id !== itemId));
    setSelectedRows(selectedRows.filter((selectedId) => selectedId !== itemId));
  };

  const handleRowSelect = (itemId) => {
    if (selectedRows.includes(itemId)) {
      setSelectedRows(
        selectedRows.filter((selectedId) => selectedId !== itemId)
      );
    } else {
      setSelectedRows([...selectedRows, itemId]);
    }
  };

  const handleSelectAll = () => {
    const allIdsOnCurrentPage = currentItems.map((item) => item.id);
    if (selectedRows.length === allIdsOnCurrentPage.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allIdsOnCurrentPage);
    }
  };

  const handleEdit = (itemId, updatedData) => {
    const updatedItems = data.map((item) =>
      item.id === itemId ? { ...item, ...updatedData } : item
    );
    setData(updatedItems);
  };

  const handleEditRow = (itemId) => {
    setEditingRow(itemId);
  };

  const handleSaveEdit = (itemId) => {
    setEditingRow(null);
  };

  const filteredData = data.filter(
    (item) =>
      item.id.toString().includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const hasResults = filteredData.length > 0;

  return {
    data,
    setData,
    setSelectedRows,
    handlePaginationClick,
    handleSearch,
    handleRowSelect,
    handleEdit,
    handleSaveEdit,
    setEditingRow,
    handleEditRow,
    handleDelete,
    handleSelectAll,
    currentPage,
    searchTerm,
    selectedRows,
    editingRow,
    currentItems,
    totalPages,
    hasResults,
  };
};
