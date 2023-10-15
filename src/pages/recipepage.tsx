import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from 'react';
import { searchRecipeWithId } from '../services/mealdb';
import { useParams } from 'react-router-dom';
import RecipeContent from "../components/recipe_content";


const fetchRecipeData = async (id: string | undefined) => {
    if(id) {
        const jsonData = await searchRecipeWithId(id);
        return jsonData.meals;
    }
     else {
        return [];
     }
}

const RecipePage = () => {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState<Array<any>>([]);
    useEffect(() => {
        fetchRecipeData(id)
       .then((data: Array<any>)=> {
        console.log('fetched',data, id)
        data && setRecipeData(data[0]);
       })
       .catch((err: any) => {
         console.error(err)
       })
    },[id])
    return (
        <div className="flex flex-col grow mx-auto w-full bg-gray-300 h-auto"> 
        <Header /> 
        <RecipeContent recipe={recipeData} />  
        <Footer />   
        </div>
    );
};

export default RecipePage;