import './hero.css'
import background from '../images/background.png'
import { useState } from 'react'
import user from '../images/user.jpg'
import Projects from '../projects/projects'
import Techstack from '../techstack/techstack'
import About from '../about/about'
import onestop from '../images/1stop.png'
import bits from '../images/bitsnbytes.png'
import udemy from '../images/udemy.png'
import Footer from '../footer/footer'
import Typed from 'react-typed'

function Hero(){
    const [currentCerti,setCC] = useState(null);
    const [certi,setcerti] = useState([{link:onestop},{link:bits},{link:udemy}])
    const [vis,setVis] = useState('hidden')

    const HandleClick = (c)=>{
        setCC(c.link);
        setVis('visible')
    }
    return(
        <div className='Hero' id="H">
            <img src={background} className='background'></img>
            <div className='infoMain'>
                <img src={user} className='dp'></img>
                <div className='Per-info'>
                    <div className='name'>Akshay <span>Nair</span></div>
                    <div className='profession'>
                        <Typed
                            strings={['Full Stack Developer','Code Enthusiast','Competitive Coder']} 
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        >
                        </Typed>
                    </div>
                </div>
                <a href=''>VIEW RESUME</a>
            </div>
            <Projects/>
            <Techstack/>
            <About/>
            {/* <div className='certifications'>
                {
                    certi.map((c)=>(
                        <img src={c.link} className='certificate' onClick={()=>{HandleClick(c)}}></img>
                    ))
                }
            </div>
            <div className='popCerti' style={{visibility:`${vis}`}}>
                <img src={currentCerti}></img>
            </div> */}
            <Footer/>
        </div>
    )
}

export default Hero