import React, { useState } from "react";
import FormDataService from "../../../services/currency-service";

const AddForm = () => {
  const initialFormState = {
    id: null,
    name: "",
    rate: ""
  };
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const saveForm = () => {
    var data = {
      name: form.name,
      rate: form.rate
    };

    FormDataService.create(data)
      .then(response => {
        setForm({
          id: response.data.id,
          name: response.data.name,
          rate: response.data.rate,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newForm = () => {
    setForm(initialFormState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newForm}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={form.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rate">rate</label>
            <input
              type="text"
              className="form-control"
              id="rate"
              required
              value={form.rate}
              onChange={handleInputChange}
              name="rate"
            />
          </div>

          <button onClick={saveForm} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddForm;