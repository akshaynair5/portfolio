import './about.css'
import user from '../images/user.jpg'
import user2 from '../images/user2.png'

function About(){
    return(
        <div className='about' style={{backgroundImage:`url(${user2})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
            <p className='heading'>About me</p>
            <div className='AboutContent' >
                <div className='infoAb'>
                    <p><b>Name:</b> akshayy</p>
                    <p><b>DOB</b></p>
                    <p><b>Education</b><br></br>Currently pursuing B-Tech Computer Science Engineering at VIT bhopal.<br></br>High School - Indian School Bahrain</p>
                </div>
            </div>
            <div className='certifications'>

            </div>
        </div>
    )
}

export default About;