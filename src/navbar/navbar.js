import './navbar.css'
import icon from '../images/icon.jpg'

function Navbar (){
    const Home = ()=>{
        const x = document.getElementById("H");
        x.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    const Projects = ()=>{
        const x = document.getElementById("H");
        x.scrollTo({
            top: 480,
            behavior: 'smooth',
        });
    }
    const About = ()=>{
        const x = document.getElementById("H");
        x.scrollTo({
            top: 1250,
            behavior: 'smooth',
        });
    }
    const Contact = ()=>{
        const x = document.getElementById("H");
        x.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className='Navbar'>
            <img src={icon} className='icon'></img>
            <button className='NavBtns' onClick={()=>Home()}>Home</button>
            <button className='NavBtns' onClick={()=>Projects()}>Projects</button>
            <button className='NavBtns' onClick={()=>About()}>About</button>
            <button className='NavBtns' onClick={()=>Contact()}>Contact</button>
        </div>
    )
}
export default Navbar