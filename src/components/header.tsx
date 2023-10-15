import { Link } from 'react-router-dom';
import { BarsIcon } from '../helpers/Icons';
import { HOMEPAGE } from '../routes/routes';
const Header = () => {
    return <div className='h-16 my-1 bg-white w-full flex justify-between items-center border-b-2'>
           <div className='pl-4'>
                <BarsIcon  />
           </div>
           <div className='pr-4 text-center'>
          <Link to={HOMEPAGE}>
           <div className='text-2xl font-bold font-serif leading-5 tracking-tight pt-3 pr-2'>
             FoodBowl
           </div>
           <div className='text-sm font-bold font-serif oldstyle-nums pb-3'>
             Happiness in a Bowl :)
           </div>
           </Link>
           </div>
    </div>;
};

export default Header;