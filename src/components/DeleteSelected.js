// DeleteSelected.js
export const handleDeleteSelected = (data, selectedRows) => {
  return data.filter((item) => !selectedRows.includes(item.id));
};
