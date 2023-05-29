import React from 'react'

function Recipe({ recipe }) {
  return (
    <div>
      ID {recipe.id}, {recipe.name}, {recipe.description}, 
    </div>
  )
}

export default Recipe
