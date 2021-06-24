import React,{useState} from "react";

function PizzaForm({addPizza}) {
  const [formData,setformData]=useState({
    topping:"",
    size:"",
    vegetarian:"",
     
  })
  function handleFormChange(event){
    console.log(event.target.value)
    console.log(event.target.name)
    setformData({
      ...formData,
      [event.target.name]:event.target.value,
    });
  }
  function submitPizzaForm(e){
    e.preventDefault()
    fetch('http://localhost:3001/pizzas',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(newPizza => addPizza(newPizza))
  }
  return (
    <form onSubmit={(e)=>submitPizzaForm(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleFormChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size"  onChange={handleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleFormChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleFormChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
