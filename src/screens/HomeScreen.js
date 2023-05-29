import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Recipe from "../components/Recipe";

import recipes from "../recipes";

function HomeScreen() {
//   const [recipes, setRecipes] = useState([]);
  return (
    <div>
      HomeScreen

      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe.id}>
            <Recipe recipe={recipe} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
