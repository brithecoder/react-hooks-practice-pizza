import React, {useState,useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaData,setStoreData]=useState([])

  useEffect(()=>{ 
    fetch('http://localhost:3001/pizzas')
    .then((resp)=>resp.json())
    .then((data)=>{
      setStoreData(data);
    }
  )
  },[])

const addPizza= (pizza) => {
  console.log(pizza)
  setStoreData([...pizzaData, pizza])
  

}

  console.log(pizzaData)
  return (
    <>
      <Header />
      <PizzaForm addPizza={addPizza} />
      <PizzaList  pizzaData={pizzaData} />
    </>
  );
}

export default App;
