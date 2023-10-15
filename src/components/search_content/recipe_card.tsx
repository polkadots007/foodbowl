import { Link, useNavigate } from "react-router-dom";


const RecipeCard = ({recipe}: any) => {
    const navigate = useNavigate();
    const handleViewMore = (id: string) => {
        navigate(`/recipe/${id}`);
    }
    return (
        <div className="w-[300px] max-w-[300px] h-[410px] bg-white p-4 border-gray-500 rounded-md m-2 transition ease-in-out scale-90 hover:scale-100 duration-300">
            <div className="h-[50%] flex justify-center bg-black mb-2" >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="" />
            </div>
            <div className="h-8 py-1 flex flex-col">
                <Link to={`/recipe/${recipe.idMeal}`}>
                <p className="font-bold text-center hover:text-orange-500 cursor-pointer">{recipe.strMeal}</p>
                </Link>
                <p><span className="font-bold">Category:</span> {recipe.strCategory}</p>
                <p><span className="font-bold">Type:</span> {recipe.strArea}</p>
                <p className="text-ellipsis h-fit">{recipe.strInstructions.substring(0,98)}... <span className=" font-bold hover:text-orange-500 cursor-pointer" onClick={(_e: any) => handleViewMore(recipe.idMeal)}>View More</span></p>
                <p><span className="font-bold">Tags:</span> {recipe.strTags}</p>
            </div>
        </div>
    )
};

export default RecipeCard;