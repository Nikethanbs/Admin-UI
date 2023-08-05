import React from "react";

const Table = ({
  data,
  selectedRows,
  editingRow,
  onRowSelect,
  onRowhandleEdit,
  onSaveEdit,
  onCancelEdit,
  onEditRow,
  onDeleteRow,
}) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectedRows.length === data.length}
              onChange={() => onRowSelect("all")}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className={selectedRows.includes(item.id) ? "selected-row" : ""}
          >
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(item.id)}
                onChange={() => onRowSelect(item.id)}
              />
            </td>
            <td>
              {editingRow === item.id ? (
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    onRowhandleEdit(item.id, { name: e.target.value })
                  }
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingRow === item.id ? (
                <input
                  type="text"
                  value={item.email}
                  onChange={(e) =>
                    onRowhandleEdit(item.id, { email: e.target.value })
                  }
                />
              ) : (
                item.email
              )}
            </td>
            <td>
              {editingRow === item.id ? (
                <input
                  type="text"
                  value={item.role}
                  onChange={(e) =>
                    onRowhandleEdit(item.id, { role: e.target.value })
                  }
                />
              ) : (
                item.role
              )}
            </td>
            <td>
              {editingRow === item.id ? (
                <>
                  <button
                    className="save-button"
                    onClick={() => onSaveEdit(item.id)}
                  >
                    Save
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => onCancelEdit()}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="edit-button"
                    onClick={() => onEditRow(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteRow(item.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
