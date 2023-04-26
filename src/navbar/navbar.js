import './navbar.css'
import icon from '../images/icon.jpg'

function Navbar (){
    return (
        <div className='Navbar'>
            <img src={icon} className='icon'></img>
            <button className='NavBtns'>Home</button>
            <button className='NavBtns'>Projects</button>
            <button className='NavBtns'>About</button>
            <button className='NavBtns'>Contact</button>
        </div>
    )
}
export default Navbar