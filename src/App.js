// src/App.js
import { Button, Divider, Row } from 'antd';

import { useState } from 'react';
import './App.css';

import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search.jsx';
import FoodBox from './components/FoodBox.jsx';

import foodsData from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [search, setSearch] = useState('');

  // console.log(search);

  const searchedFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  const deleteFood = (name) => {
    const foodsNotDeleted = foods.filter((food) => food.name !== name);
    setFoods(foodsNotDeleted);
  };

  // console.log(searchedFoods.length);

  // const foodsList = searchedFoods.map((food) => (
  //   <FoodBox
  //     key={food.name}
  //     food={{
  //       ...food,
  //     }}
  //   />
  // ));

  return (
    <div className="App">
      <AddFoodForm setFoods={setFoods} />
      <Button> Hide Form / Add New Food </Button>
      <Search search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <section className="foods">
          {searchedFoods.length > 0 ? (
            searchedFoods.map((food) => {
              return (
                <FoodBox
                  key={food.name}
                  food={{
                    ...food,
                  }}
                  deleteFood={deleteFood}
                />
              );
            })
          ) : (
            <p>Nothing to display</p>
          )}
        </section>
      </Row>
    </div>
  );
}
export default App;
