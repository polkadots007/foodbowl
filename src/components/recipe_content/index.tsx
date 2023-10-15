import Image from './image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Content from './content';
import React, { useEffect } from 'react';
import { ingredients, ingredMeasures } from '../../fixtures/constants';



const RecipeContent = ({recipe}: any) => {
    const [recipeDetails, setRecipeDetails] = React.useState<object>({name: '', type: '', category: '', ingredients: [],measures: [], instructions: [], src: '', vid: ''});
    console.log('data', recipe)
    useEffect(() => {

        function formatRecipe(recipe: any, setRecipeDetails: any) {
            const ingreds: Array<string>  = ingredients.map((key: string) => recipe[key]);
            const ingredMes: Array<string>  = ingredMeasures.map((key: string) => recipe[key]);
            const instructions: Array<string> = recipe['strInstructions'].split('\r\n');

            setRecipeDetails({
                name: recipe['strMeal'],
                type: recipe['strArea'],
                category: recipe['strCategory'],
                ingredients: ingreds,
                measures: ingredMes,
                instructions: instructions,
                src: recipe['strSource'],
                vid: recipe['strYoutube']

            })
        }
        (recipe && Object.values(recipe).length) && formatRecipe(recipe, setRecipeDetails)

    }, [recipe])

    return <div className='bg-food-homepage h-full bg-cover bg-center bg-repeat-y'>
        {recipe && Object.values(recipe).length ?
            <div className='m-8 h-auto rounded-xl border-gray-500 bg-white flex flex-col align-center'>
                <h1 className='font-bold text-center font-Roboto text-4xl pt-4'>{recipe.strMeal}</h1>
                <div className ='mx-4 mt-2 mb-2 h-[400px] bg-white flex justify-center object-fill'>
                    <Image src={recipe.strMealThumb} caption={recipe.strMeal} />
                </div>
                <Content data={recipeDetails} />
            </div>
        : <Skeleton width='90%' height={400} className='m-8 rounded-xl'/>
        }
    </div>;
};

export default  RecipeContent;