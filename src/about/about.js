import './about.css'
import user from '../images/user.png'

function About(){
    return(
        <div className='about'>
            <p className='heading'>About me</p>
            <div className='AboutContent'>
                <img src={user}></img>
                <div className='infoAb'>
                    <p>name</p>
                    <p>dob</p>
                    <p>education</p>
                </div>
            </div>
            <div className='certifications'>
                
            </div>
        </div>
    )
}

export default About;