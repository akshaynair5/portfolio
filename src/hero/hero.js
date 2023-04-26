import './hero.css'
import background from '../images/background.webp'
import user from '../images/user.png'
import Projects from '../projects/projects'
import Techstack from '../techstack/techstack'

function Hero(){
    return(
        <div className='Hero'>
            <img src={background} className='background'></img>
            <div className='infoMain'>
                <img src={user} className='dp'></img>
                <div className='Per-info'>
                    <div className='name'>Akshay <span>Nair</span></div>
                    <div className='profession'>Full Stack Developer</div>
                </div>
            </div>
            <Techstack/>
            <Projects/>
        </div>
    )
}

export default Hero