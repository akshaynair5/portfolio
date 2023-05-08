import { useEffect, useState } from 'react'
import './projects.css'

function Projects(){
    const [currentProject,setCP] = useState({})
    // onMouseEnter={()=>setHV("visible")} onMouseLeave={()=>{setHV("hidden")}}
    const [vis,setVis] = useState("hidden")
    const [projectDetails,setPD] = useState([

    {name:'Daily Companion',link:'https://akshaynair5.github.io/Daily-Companion/',bg:'https://user-images.githubusercontent.com/108605741/217944590-e28e169a-1a23-4711-ad12-b7fff971091f.png',desc:'Daily Companion is a One stop desitination which gives all the information that you would need for the day!!.It provides you with the latest weather updates based on the city that you live in along with the latest NEWS around world, A short quick note is also provided which advices you based on the weather for the rest of the day.Users can also post short notes to keep themselves on track.'},

    {name:'Notify', link:'https://github.com/akshaynair5/devbot', bg:'https://user-images.githubusercontent.com/108605741/236850083-d7075b15-f136-4cff-8e2c-6efcf6f89cab.png',desc:' the project that I created is a web application using React, Firebase Firestore, and Firebase Authentication. The goal of this project is to make it easy for users to find and connect with their friends online. When a user logs in, they can search for their friends and add them to their chat list. This makes it easy to initiate conversations and communicate with their friends in real-time. Plus, the application is built with security in mind, leveraging Firebase Authentication to ensure that user information is protected.'},

    {name:'V-Help',link:'https://github.com/akshaynair5/Hostel-Complain-System',desc:'V-help is a web-based application that allows students to file complaints related to their hostel rooms under three categories: electrical, furniture, and cleaning. The website assigns complaints to workers based on their domain of service, and students can update, delete, and check the status of their complaints. Workers have a separate interface through which they can view and resolve complaints based on their area of expertise. The website features an admin panel that enables the admin to manage the entire complaint resolution process.',bg:'https://user-images.githubusercontent.com/108605741/209649558-69f228c2-760d-40e0-9c24-5d3ee93654e5.png'},
    
    {name:'MusicNow',link:'https://github.com/akshaynair5/MusicNow',bg:'https://user-images.githubusercontent.com/108605741/212974369-44b48844-07a6-4a5e-be32-2c509c1180d5.png',desc:'MusicNow is a website built using React.js that provides users with access to the latest songs topping the charts. Users can also search for their favorite songs, add them to their favorites list, and create their own playlists. The website features a user-friendly interface that allows users to easily navigate and search for songs. The MusicNow website utilizes React.js to provide a smooth and seamless user experience. The website retrieves song data from external APIs and displays them in a visually appealing manner. The website also provides additional information about the songs, such as artist names and album covers.'},
    
    {name:'devbot',link:'https://github.com/akshaynair5/devbot',bg:'https://user-images.githubusercontent.com/108605741/216830223-52af03cd-f84d-4aa5-9f5d-168ea39276da.png',desc:'DevBot is a Chat-Bot made using react.js,express and openapi. It has a simple UI through which users can ask questions regarding programing and recieve accurate answers in text form from the API. Personal chat with the bot is stored for you to access it again for future references.'}

])

    useEffect(()=>{
        console.log(currentProject)
    },[currentProject])
    const HandleClick = (project)=>{
        setCP(project)
        setVis("visible")
    }
    return(
        <div className='Projects'>
            <div className='descpopup1' style={{visibility:`${vis}`}} onClick={()=>{setVis("hidden")}}>
                <div className="descpopup">
                    <div className='descContent'>
                        <img src={`${currentProject.bg}`}></img>
                        <p>{currentProject.name}</p>
                        <p>{currentProject.desc}</p>
                        <a href={`${currentProject.link}`}><img src="https://img.icons8.com/ios/50/null/github--v1.png"/></a>
                    </div>
                </div>
            </div>
            <p className='heading'>Projects</p>
            <div className='projects-container'>
                {
                    projectDetails.map((project)=>(
                        <div className='project' onClick={(()=>{HandleClick(project)})}>
                            <div className='projecttab' style={{backgroundImage:`url(${project.bg})`}}>
                                {/* <a href="https://github.com/akshaynair5/Hostel-Complain-System">
                                Hostel Complaint System</a> */}
                            </div>
                            <a href={`${project.link}`}>{project.name}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects