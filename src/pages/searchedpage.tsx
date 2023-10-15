import Header from "../components/header";
import Footer from "../components/footer";
import SearchContent from "../components/search_content";
import { useEffect, useState } from 'react';
import { searchRecipe } from '../services/mealdb';
import { useParams } from 'react-router-dom';
import { ROUTES_SUB } from "../routes/routes";


const fetchData = async (key: string | undefined, words: string | undefined) => {
    if(key && words) {
        const jsonData = await searchRecipe(ROUTES_SUB[key]+words);
        return jsonData.meals;
    }
     else {
        return [];
     }
}

const SearchedPage = () => {
    const { type, searchTerm } = useParams();
    const [recipeData, setRecipeData] = useState<Array<any>>([]);
    useEffect(() => {
       fetchData(type, searchTerm)
       .then((data: Array<any>)=> {
        data && setRecipeData(data);
       })
       .catch((err: any) => {
         console.error(err)
       })
    },[searchTerm, type])
    return (
        <div className="flex flex-col grow mx-auto w-full bg-gray-300 h-auto"> 
        <Header /> 
        <SearchContent recipes={recipeData} />  
        <Footer />   
        </div>
    );
};

export default SearchedPage;