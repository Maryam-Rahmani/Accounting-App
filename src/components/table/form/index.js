import React, { useState, useEffect } from "react";
import FormDataService from "../services/form-service";

const Form = props => {
  const initialFormState = {
    id: null,
    name: "",
    rate: ""
  };
  const [currentForm, setCurrentForm] = useState(initialFormState);
  const [message, setMessage] = useState("");

  const getForm = id => {
    FormDataService.get(id)
      .then(response => {
        setCurrentForm(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getForm(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentForm({ ...currentForm, [name]: value });
  };

  const updateCurrency = status => {
    var data = {
      id: currentForm.id,
      name: currentForm.name,
      rate: currentForm.rate,
    };

    FormDataService.update(currentForm.id, data)
      .then(response => {
        setCurrentForm({ ...currentForm, Currency: status });
        console.log(response.data);
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateForm = () => {
    FormDataService.update(currentForm.id, currentForm)
      .then(response => {
        console.log(response.data);
        setMessage("The Form was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteForm = () => {
    FormDataService.remove(currentForm.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/Forms");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentForm ? (
        <div className="edit-form">
          <h4>Form</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentForm.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rate">rate</label>
              <input
                type="text"
                className="form-control"
                id="rate"
                name="rate"
                value={currentForm.rate}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentForm.Currency ? "Currency" : "Pending"}
            </div>
          </form>

          {currentForm.Currency ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateCurrency(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateCurrency(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteForm}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateForm}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Form...</p>
        </div>
      )}
    </div>
  );
};

export default Form;