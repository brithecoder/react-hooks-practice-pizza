import React, {useState} from "react";

function Pizza({pizza}) {
  const vegetarian= pizza.vegetarian

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{vegetarian? "yes": "no"}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
