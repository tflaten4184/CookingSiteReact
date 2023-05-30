import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import Recipe from "../components/Recipe";

import recipes from "../recipes";

function HomeScreen() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      console.log("before axios");
      const { data } = await axios.get("/api/recipes/");
      console.log(data);
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

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
