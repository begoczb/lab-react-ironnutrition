import { Divider, Input } from 'antd';
import React, { useState } from 'react';

const AddFoodForm = ({ setFoods }) => {
  const [values, setValues] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFoods((currentState) => [...currentState, values]);
  };

  return (
    <form className="form-food" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={values.name}
        type="text"
        onChange={(event) => {
          setValues({ ...values, [event.target.name]: event.target.value });
        }}
      />

      <label>Image</label>
      <Input
        name="image"
        value={values.image}
        type="text"
        onChange={(event) => {
          setValues({ ...values, [event.target.name]: event.target.value });
        }}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={values.calories}
        type="number"
        onChange={(event) => {
          setValues({ ...values, [event.target.name]: event.target.value });
        }}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={values.servings}
        type="number"
        onChange={(event) => {
          setValues({ ...values, [event.target.name]: event.target.value });
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
