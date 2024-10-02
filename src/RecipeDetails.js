import React from 'react'
import { useLocation } from 'react-router-dom'

function RecipeDetails(){
  const {state}=useLocation()
  return (
    <div className='border-2 w-3/4 mx-auto my-1 shadow'>
        <div className='flex justify-start gap-10 flex-wrap m-2 p-2'>
            <img src={state.recipe.image} alt={state.recipe.label}/>
            <div>
                <h1 className='text-2xl font-bold'>{state.recipe.label}</h1>
                <div className='flex justify-start gap-1 flex-wrap my-2'>
                    <p className='border-2 w-max px-2 py-1 capitalize shadow'>{state.recipe.cuisineType} cuisine</p>
                    <p className='border-2 capitalize w-max px-2 py-1 shadow'>{state.recipe.dishType}</p>
                    <p className='border-2 capitalize w-max px-2 py-1 shadow'>{state.recipe.mealType}</p>
                </div>
                <a href={state.recipe.url} className='text-green-500'>click here for full recipe</a>
                <div className='my-2'>
                    <h2 className='font-bold'>Nutrition</h2>
                </div>
                <div className='flex justify-start gap-1 flex-wrap my-2'>
                    <p className='border-2 w-max px-2 py-1 bg-green-200'>{(state.recipe.calories.toFixed(2))} kcal</p>
                    <p className='border-2 w-max px-2 py-1 bg-green-200'>{state.recipe.totalNutrients.CHOCDF.label}: {(state.recipe.totalNutrients.CHOCDF.quantity).toFixed(2)} {state.recipe.totalNutrients.CHOCDF.unit}</p>
                    <p className='border-2 w-max px-2 py-1 bg-green-200'>{state.recipe.totalNutrients.PROCNT.label}: {(state.recipe.totalNutrients.PROCNT.quantity).toFixed(2)} {state.recipe.totalNutrients.PROCNT.unit}</p>
                    <p className='border-2 w-max px-2 py-1 bg-green-200'>{state.recipe.totalNutrients.FAT.label}: {(state.recipe.totalNutrients.FAT.quantity.toFixed(2))} {state.recipe.totalNutrients.FAT.unit}</p>
                </div>
            </div>
        </div>
        <div className='m-2 p-2'>
            <h2 className='font-bold'>Ingredients</h2>
            <ul>
                {state.recipe.ingredientLines.map((ingredients,index)=>(
                    <li>{ingredients}</li>
                    )
                )}
            </ul>
        </div>
    </div>
  )
}

export default RecipeDetails
