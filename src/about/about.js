import './about.css'
import user from '../images/user.jpg'
import user2 from '../images/user2.png'


function About(){

    return(
        <div className='about' style={{backgroundImage:`url(${user2})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
            <p className='heading'>About me</p>
            <div className='AboutContent' >
                <div className='infoAb'>
                    <p><b>Name:</b> Akshay Mathilakath Nair</p>
                    <p><b>DOB: </b>16/08/2003</p>
                    <p><b>Education: </b>Currently pursuing B-Tech Computer Science Engineering degree at VIT bhopal.<br></br>High School - Indian School Bahrain</p>
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