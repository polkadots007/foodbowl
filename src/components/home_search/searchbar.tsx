import * as React from 'react';
import { SearchIcon } from './../../helpers/Icons';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchKey, setSearchKey] = React.useState<string>('meal');
    const [searchWords, setSearchWords] = React.useState('');
    const navigate = useNavigate();
  
    const handleChange = (event: SelectChangeEvent) => {
        setSearchKey(event.target.value as string);
    };

    const handleInput = (event: any) => {
        setSearchWords(event.target.value as string);
    };

    const handleSearch = async () => {
        searchWords.length > 0 && navigate(`/search/${searchKey}/${searchWords.includes(" ")? searchWords.replace(/ /g, '_') : searchWords}`);
       }

    return <div className='h-10 flex md:flex-row flex-col'>
        <div className="h-8 w-[100px] bg-yellow-400 rounded-md flex justify-center items-center font-roboto">
            Search by
        </div>
        <Select
            labelId="recipe-type-lbl"
            className="min-w-[120px] h-8 bg-yellow-400"
            value={searchKey}
            label="Recipe Type"
            autoWidth={true}
            onChange={handleChange}
          >
            <MenuItem value={'meal'}>Meal</MenuItem>
            <MenuItem value={'main_ingredients'}>Main Ingredient</MenuItem>
            <MenuItem value={'category'}>Category</MenuItem>
            <MenuItem value={'area'}>Area</MenuItem>
          </Select>
        <div className="flex flex-row">
            <Input className="h-8 md:w-[250px] w-[100px] bg-white pl-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" 
            placeholder="...........Searching for Tacos?" 
            onChange={handleInput}
            onKeyDown={(event: React.KeyboardEvent) => {
                console.log('Event', event)
                console.log(event.key)
                if(event.key === 'Enter') {
                    console.log('here')
                    handleSearch(event)
                }
            }} />
                <div className="h-8 bg-yellow-400 rounded-md transform -scale-x-100 flex justify-center items-center px-1" 
                onClick={handleSearch}
                >
                    <SearchIcon />
                </div>
        </div>

    </div>;
};

export default SearchBar;