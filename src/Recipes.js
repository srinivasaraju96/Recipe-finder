import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Recipes({recipes}){
  const[loading,setLoading]=useState(true)
  return (
    <div>
        <ul className='flex flex-wrap justify-center gap-5'>
            {recipes.map((recipe,index)=>(
                <li key={index} className='border-2 w-72 rounded'>
                    <h2 className='m-2 font-bold text-green-700'>{recipe.recipe.label}</h2>
                    <div className='relative flex justify-center items-center w-full h-72 border-y-2'>
                      {loading&&<div className='loader'></div>}
                      <img src={recipe.recipe.image} alt={recipe.recipe.label} className={`${loading?'hidden':""} w-full h-full`} onLoad={()=>setLoading(false)}/>
                    </div>
                    <div className='flex'>
                    <Link to="recipe" state={{recipe:recipe.recipe}} className='ml-auto'><button className='m-2 bg-green-700 text-white rounded px-2 py-1'>Recipe Details</button></Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Recipes
