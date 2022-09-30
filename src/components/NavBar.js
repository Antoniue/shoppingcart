import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="header">
            <ul className="pages">
                <li className="homeClick"><NavLink to='/'>Home</NavLink></li>
                <li className="shopClick"><NavLink to='/shop'>Shop</NavLink></li>
            </ul>
        </nav>
    )
}
export {NavBar};