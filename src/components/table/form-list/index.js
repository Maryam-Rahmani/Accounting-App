import React, { useState, useEffect, useMemo, useRef } from "react";
import FormDataService from "../services/form-service";
import { useTable } from "react-table";

const FormsList = (props) => {
  const [forms, setForms] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const formsRef = useRef();

  formsRef.current = forms;

  useEffect(() => {
    retrieveForms();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveForms = () => {
    FormDataService.getAll()
      .then((response) => {
        setForms(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveForms();
  };

  const removeAllForms = () => {
    FormDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    FormDataService.findByTitle(searchTitle)
      .then((response) => {
        setForms(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openForm = (rowIndex) => {
    const id = formsRef.current[rowIndex].id;

    props.history.push("/Forms/" + id);
  };

  const deleteForm = (rowIndex) => {
    const id = formsRef.current[rowIndex].id;

    FormDataService.remove(id)
      .then((response) => {
        props.history.push("/Forms");

        let newForms = [...formsRef.current];
        newForms.splice(rowIndex, 1);

        setForms(newForms);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Status",
        accessor: "published",
        Cell: (props) => {
          return props.value ? "Published" : "Pending";
        },
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openForm(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteForm(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: forms,
  });

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <button className="btn btn-sm btn-danger" onClick={removeAllForms}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default FormsList;