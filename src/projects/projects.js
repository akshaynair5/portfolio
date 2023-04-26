import { useEffect, useState } from 'react'
import './projects.css'

function Projects(){
    const [currentProject,setCP] = useState({})
    // onMouseEnter={()=>setHV("visible")} onMouseLeave={()=>{setHV("hidden")}}
    const [vis,setVis] = useState("hidden")
    const [projectDetails,setPD] = useState([{name:'V-Help',desc:'V-help is a web-based application that allows students to file complaints related to their hostel rooms under three categories: electrical, furniture, and cleaning. The website assigns complaints to workers based on their domain of service, and students can update, delete, and check the status of their complaints. Workers have a separate interface through which they can view and resolve complaints based on their area of expertise. The website features an admin panel that enables the admin to manage the entire complaint resolution process.',bg:'https://user-images.githubusercontent.com/108605741/209649558-69f228c2-760d-40e0-9c24-5d3ee93654e5.png'}])

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
                            <p>{project.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects