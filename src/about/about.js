import './about.css'
import user from '../images/user.jpg'
import user2 from '../images/user2.png'


function About(){

    return(
        <div className='about' style={{backgroundImage:`url(${user2})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
            <p className='heading'>About me</p>
            <div className='AboutContent' >
                <div className='infoAb'>
                    <p><b>Hi, my name is Akshay Mathilakath Nair, and I'm happy to tell you a bit more about myself. I was born on August 16th, 2003, and I grew up in Bahrain, where I attended the Indian School Bahrain for my high school education. After completing my schooling, I decided to pursue my passion for technology and web development. That's why I'm currently studying Computer Science Engineering at VIT Bhopal.
As a full stack web developer, I am deeply committed to my work and take great pride in producing high-quality, user-friendly websites and web applications. I'm constantly striving to learn and improve my skills.
In my free time, I enjoy working on personal coding projects and exploring new technologies. I also like to stay active by playing sports and going to the gym.</b></p>
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