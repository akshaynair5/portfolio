import './about.css'
import user from '../images/user.jpg'
import user2 from '../images/user2.png'


function About(){

    return(
        <div className='about' style={{backgroundImage:`url(${user2})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
            <p className='heading'>About me</p>
            <div className='AboutContent' >
                <div className='infoAb'>
                    <p><b>Hello, I'm Akshay Mathilakath Nair, I am a 4th-year Computer Science student at VIT Bhopal with a strong focus on full-stack development and scalable software solutions. Proficient in technologies like React.js, Node.js, Firebase, and Redis, My experience spans building robust systems with real-time features, implementing advanced algorithms, and enhancing performance. Driven by innovation, I am passionate about applying cutting-edge technologies to solve complex problems and contribute to meaningful projects.Hello, I'm Akshay Mathilakath Nair, I am a 4th-year Computer Science student at VIT Bhopal with a strong focus on full-stack development and scalable software solutions. Proficient in technologies like React.js, Node.js, Firebase, and Redis, My experience spans building robust systems with real-time features, implementing advanced algorithms, and enhancing performance. Driven by innovation, I am passionate about applying cutting-edge technologies to solve complex problems and contribute to meaningful projects.</b></p>
                </div>
            </div>
            {/* <div className='certifications'>
                <img src={onestop} className='certificate'></img>
                <img src={bits} className='certificate'></img>
                <img src={udemy} className='certificate'></img>
            </div> */}
        </div>
    )
}

export default About;