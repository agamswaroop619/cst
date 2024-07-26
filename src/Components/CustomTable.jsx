import React from "react";
import "./table.css";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";
import { MdModeEditOutline, MdVisibility } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Spinner } from "react-bootstrap";

const CustomTable = ({
  data = [],
  columns = [],
  hover = true,
  striped = true,
  headerStyle,
  bodyStyle,
  cellStyle,
  isEdit = false,
  isView = false,
  isDelete = false,
  isDownload = false,
  isCancel = false,
  onEdit,
  onView,
  onDel,
  onDown = () => {},
  loading = false,
}) => {
  const calculateGrandTotal = (data, field) => {
    return data.reduce((acc, row) => acc + (row[field] || 0), 0);
  };

  const hasTotalColumn = columns.some((col) => col.total);

  return (
    <div className="tdCustomContainer">
      {loading ? (
        <table>
          <thead className="TheadFixed">
            <tr>
              {columns.map((head, index) => (
                <th style={{ ...headerStyle }} key={index}>
                  {head.header}
                </th>
              ))}
              {(isEdit || isDelete || isDownload || isCancel || isView) && (
                <th style={{ ...headerStyle }}>Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length + 1}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <Spinner animation="border" variant="warning" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : data.length === 0 ? (
        <table>
          <thead className="TheadFixed">
            <tr>
              {columns.map((head, index) => (
                <th style={{ ...headerStyle }} key={index}>
                  {head.header}
                </th>
              ))}
              {(isEdit || isDelete || isDownload || isCancel || isView) && (
                <th style={{ ...headerStyle }}>Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length + 1}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  {/* <NoData /> */}
                  No data
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table>
          <thead className="TheadFixed">
            <tr>
              {columns.map((head, index) => (
                <th style={{ ...headerStyle }} key={index}>
                  {head.header}
                </th>
              ))}
              {(isEdit || isDelete || isDownload || isCancel || isView) && (
                <th style={{ ...headerStyle }}>Action</th>
              )}
            </tr>
          </thead>
          <tbody style={bodyStyle}>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${hover ? "hover" : ""} ${
                  striped ? "striped" : ""
                }`}
              >
                {columns.map((col, colIndex) => (
                  <td style={cellStyle} key={colIndex}>
                    {col.cell ? col.cell(row) : row[col.field]}
                  </td>
                ))}
                {(isEdit || isDelete || isDownload || isCancel || isView) && (
                  <td style={cellStyle}>
                    {isEdit && (
                      <span
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        onClick={() => onEdit?.(row, rowIndex)}
                        className="svg-icon svg-icon-md svg-icon-primary"
                      >
                        <MdModeEditOutline color="#A21094" />
                      </span>
                    )}
                    {isDelete && (
                      <span
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        onClick={() => onDel?.(row, rowIndex)}
                        className="svg-icon svg-icon-md svg-icon-primary"
                      >
                        <AiOutlineDelete color="#A21094" />
                      </span>
                    )}
                    {isDownload && (
                      <span
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        onClick={() => onDown?.(row, rowIndex)}
                        className="svg-icon svg-icon-md svg-icon-primary"
                      >
                        <AiOutlineDownload color="#A21094" />
                      </span>
                    )}
                    {isCancel && (
                      <span
                        style={{ cursor: "pointer", marginRight: "0px" }}
                        className="svg-icon svg-icon-md svg-icon-primary"
                      >
                        <ImCancelCircle color="#A21094" />
                      </span>
                    )}
                    {isView && (
                      <span
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        onClick={() => onView?.(row, rowIndex)}
                        className="svg-icon svg-icon-md svg-icon-primary"
                      >
                        <MdVisibility color="#A21094" />
                      </span>
                    )}
                  </td>
                )}
              </tr>
            ))}
            {hasTotalColumn && (
              <tr>
                {columns.map((col, index) => (
                  <td style={cellStyle} key={index}>
                    {col.total ? (
                      <strong>{calculateGrandTotal(data, col.field)}</strong>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
                {(isEdit || isDelete || isDownload || isCancel || isView) && (
                  <td style={cellStyle}>
                    <strong>TOTAL</strong>
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomTable;
