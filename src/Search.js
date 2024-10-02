import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'
function Search(){
    const[recipe,setRecipe]=useState("")
    const[recipes,setRecipes]=useState([])
    const[error,setError]=useState("")
    const APPID=process.env.REACT_APP_APP_ID
    const APPKEY=process.env.REACT_APP_APP_KEY
    
    
    useEffect(()=>{
      const recipes=sessionStorage.getItem('recipes')
      if(recipes){
        setRecipes(JSON.parse(recipes))
      }
    },[])
    async function recipeFinder(url){
        try{
            const response=await fetch(url)
            if(!response.ok){
                throw new Error("Error"+response.statusText)
            }
            const data=await response.json()
            return data.hits
        }
        catch(error){
            return error.message
        }
    }
    function handleLClick(){
      setRecipes([])
      setError("")
      const url=`https://api.edamam.com/api/recipes/v2/?type=public&q=${recipe}&app_id=${APPID}&app_key=${APPKEY}`
      const recipeList=recipeFinder(url)
      recipeList.then(data=>{
        setRecipes(data)
        sessionStorage.setItem('recipes',JSON.stringify(data))
      })
      .catch(error=>setError(error))
    }
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-20 w-full bg-neutral-200 sm:flex-row sm:h-16'>
        <input type='search' placeholder='Enter the recipe' className='w-3/5 px-2 py-1 border-2 border-black rounded sm:w-1/2' value={recipe} onChange={(e)=>setRecipe(e.target.value)}/>
        <button className='bg-green-800 rounded text-white px-2 py-1 mt-1 ml-1 sm:mt-0' 
         onClick={handleLClick}
        >Search Recipe</button>
      </div>
      <div className='mt-1'>
        {error?<h1>{error}</h1>:null}
        {recipes.length>0?<Recipes recipes={recipes} />:null}
      </div>
    </div>
    
  )
}

export default Search

