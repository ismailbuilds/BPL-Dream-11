import Logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav className= "bg-amber-200">
            <div className='container mx-auto flex justify-between'>
            <img src={Logo} alt="" />
            <ul className='flex gap-4 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            </div>
        </nav>
    );
};

export default Nav;