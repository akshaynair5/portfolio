import { useState } from 'react'
import './projects.css'

function Projects(){
    const [HovVis,setHV] = useState("hidden")
    return(
        <div className='Projects'>
            <p className='heading'>Projects</p>
            <div className='projects-container'>
                <div className='projecttab' style={{backgroundImage:'url(https://user-images.githubusercontent.com/108605741/209649558-69f228c2-760d-40e0-9c24-5d3ee93654e5.png)'}} onMouseEnter={()=>setHV("visible")} onMouseLeave={()=>{setHV("hidden")}}>
                    {/* <a href="https://github.com/akshaynair5/Hostel-Complain-System">
                    Hostel Complaint System</a> */}
                    <div className='descBox' style={{visibility:`${HovVis}`}}>
                        <p className='headingD'>V-HELP</p>
                        <p className='desc'>V-help is a web-based application that allows students to file complaints related to their hostel rooms under three categories: electrical, furniture, and cleaning. The website assigns complaints to workers based on their domain of service, and students can update, delete, and check the status of their complaints. Workers have a separate interface through which they can view and resolve complaints based on their area of expertise. The website features an admin panel that enables the admin to manage the entire complaint resolution process.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects