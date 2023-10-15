export const searchRecipe = async (searchTerm: string) => {
    console.log('url',`https://www.themealdb.com/api/json/v1/1/${searchTerm}`)
    const results  = await fetch(`https://www.themealdb.com/api/json/v1/1/${searchTerm}`);
    //use string literals
    const data = await results.json();
    return data;
   }

   export const searchRecipeWithId = async (id: string) => {
    console.log('url',`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const results  = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    //use string literals
    const data = await results.json();
    return data;
   }