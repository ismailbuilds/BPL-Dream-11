import { HiCurrencyDollar } from 'react-icons/hi';
import Logo from '../assets/logo.png'


const Nav = ({coin} : {coin: number}) => {
    
    return (
        <nav className= "bg-amber-200">
            <div className='container mx-auto flex justify-between items-center'>
            <img src={Logo} alt="" />
            <ul className='flex gap-4 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <h2 className='flex gap-1 text-xl items-center font-bold'><HiCurrencyDollar />{coin}</h2>
            </div>
        </nav>
    );
};

export default Nav;