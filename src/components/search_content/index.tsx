// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import RecipeCard from './recipe_card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const SearchContent = ({recipes}: any) => {
    console.log('data', recipes)

    return <div className='bg-food-homepage w-full h-auto bg-cover bg-center bg-repeat-y'>
        <div className='p-4 grid md:grid-cols-4 xl:grid-cols-6 '>
        {recipes && recipes.length > 0?
        recipes.map((recipe: any) => {
            return  <RecipeCard recipe={recipe} key={recipe.idMeal} />
        }) 
        : new Array(10).fill(0).map((_, i) => <Skeleton key={i} width={300} height={400} className='scale-90'/>)
    }
        </div>
    </div>;
};

export default  SearchContent;