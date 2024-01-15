import './about.css'
import user from '../images/user.jpg'
import user2 from '../images/user2.png'


function About(){

    return(
        <div className='about' style={{backgroundImage:`url(${user2})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
            <p className='heading'>About me</p>
            <div className='AboutContent' >
                <div className='infoAb'>
                    <p><b>Greetings, I'm Akshay Mathilakath Nair. Born on August 16th, 2003, in Bahrain, I completed high school at the Indian School Bahrain. Now pursuing Computer Science Engineering at VIT Bhopal, I'm passionate about competitive coding, machine learning, and full-stack web development. I find joy in crafting high-quality, user-friendly websites while actively participating in coding competitions. My dedication to constant learning extends to exploring the realms of machine learning. Outside of the digital realm, I balance my interests by staying active through sports and the gym. Thank you for letting me share a glimpse into my multifaceted journey.</b></p>
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