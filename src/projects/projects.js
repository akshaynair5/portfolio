import { useEffect, useState } from 'react'
import './projects.css'

function Projects(){
    const [currentProject,setCP] = useState({})
    // onMouseEnter={()=>setHV("visible")} onMouseLeave={()=>{setHV("hidden")}}
    const [vis,setVis] = useState("hidden")
    const [projectDetails,setPD] = useState([

        {
            name: 'Rate Limiter Redis',
            link: 'https://github.com/user-attachments/assets/ef6be271-2783-4a06-b4ea-944a76847626',
            Glink: 'https://github.com/akshaynair5/Rate-Limiter',
            bg: 'https://github.com/user-attachments/assets/ef6be271-2783-4a06-b4ea-944a76847626', // Add an appropriate background image link if needed
            desc: 'The Rate Limiter Redis project provides an efficient middleware solution for Node.js applications, implementing various algorithms like Token Bucket, Sliding Window, and Leaky Bucket for traffic control. It integrates seamlessly with Redis to manage request states across distributed systems, effectively preventing server overload and mitigating DDoS attacks by up to 75%. The project is designed to optimize server performance while ensuring reliable traffic management. It is released as an npm package for easy integration into existing Node.js applications, enhancing their robustness and scalability.'
          },
    
    {name:'Harvest Wheels',link:'https://akshaynair5.github.io/harvest_wheels/', Glink:'https://github.com/akshaynair5/harvest_wheels', bg:'https://github.com/user-attachments/assets/1645e365-7c29-4619-b10a-2512cc10bb88',desc:'The Transportation and Logistics Platform streamlines the process of finding and booking transportation services for goods, connecting farmers and transportation providers with fair pricing based on real-time conditions. Users can register as transportation providers or customers, each role offering tailored functionalities. Providers can post journey details, and users can book space for their goods through a flexible system. Pricing is transparent and fair, calculated using real-time data on distance, traffic, and weather. Upon delivery, providers upload proof, prompting users to verify and make payments. The platform keeps users informed with notifications about journey updates, payment requests, and live location tracking, ensuring smooth and secure transactions.'},

    {name:'SQL-Injection-Detector',link:'https://test.pypi.org/project/sql-injection-detector/',Glink:'https://github.com/akshaynair5/SQL_Injection_detection/',bg:'https://github.com/user-attachments/assets/6fbc8142-94ca-46e2-b914-35397f685908',desc:'The SQL Injection Detector is a Python library designed to help developers detect and prevent SQL injection attacks. Utilizing machine learning techniques, it identifies potentially harmful SQL queries and can be seamlessly integrated into existing web applications to enhance security. This library, available on PyPI, offers features such as machine learning-based detection using logistic regression and text vectorization, easy integration into any Python-based web application, logging and reporting of all predictions, batch processing of multiple queries, and configurable alerts for detected SQL injections.'},

    {name:'Kanban Board',link:'https://akshaynair5.github.io/kanban_board/', Glink:'https://github.com/akshaynair5/kanban_board', bg:'https://github.com/akshaynair5/kanban_board/assets/108605741/caf84432-cb1b-4ee9-8e0a-af64bd88ab8d',desc:'Taking inspiration from suggested websites and Trello, I have created an efficient, fast, and easy-to-use platform to maintain, monitor, and organize day-to-day tasks. Initially, users create an account and enter necessary details before being redirected to the home page. The platform`s structure consists of three main components: Boards, Cards, and Messages. Each board can store several cards where tasks can be placed, and users can rearrange these cards conveniently through drag-and-drop functionality. Users can create and delete boards, add and delete cards within each board, and add, edit, delete, and move messages between cards. Firebase serves as the database, storing user information, authentication, and Firestore database, ensuring real-time updates to user credentials, profile information, boards, cards, and messages.'},
    
    {name:'Notify',link:'https://akshaynair5.github.io/Notify/', Glink:'https://github.com/akshaynair5/Notify', bg:'https://github.com/user-attachments/assets/c3cb29e9-3a7a-49fa-a444-0f8dacc9cff8',desc:' the project that I created is a web application using React, Firebase Firestore, and Firebase Authentication. The goal of this project is to make it easy for users to find and connect with their friends online. When a user logs in, they can search for their friends and add them to their chat list. This makes it easy to initiate conversations and communicate with their friends in real-time. Plus, the application is built with security in mind, leveraging Firebase Authentication to ensure that user information is protected.'},

    {name:'Daily Companion',link:'https://akshaynair5.github.io/Daily-Companion/',Glink:'https://akshaynair5.github.io/Daily-Companion/',bg:'https://user-images.githubusercontent.com/108605741/217944590-e28e169a-1a23-4711-ad12-b7fff971091f.png',desc:'Daily Companion is a One stop desitination which gives all the information that you would need for the day!!.It provides you with the latest weather updates based on the city that you live in along with the latest NEWS around world, A short quick note is also provided which advices you based on the weather for the rest of the day.Users can also post short notes to keep themselves on track.'},

    {name:'V-Help',link:'',Glink:'https://github.com/akshaynair5/Hostel-Complain-System/',desc:'V-help is a web-based application that allows students to file complaints related to their hostel rooms under three categories: electrical, furniture, and cleaning. The website assigns complaints to workers based on their domain of service, and students can update, delete, and check the status of their complaints. Workers have a separate interface through which they can view and resolve complaints based on their area of expertise. The website features an admin panel that enables the admin to manage the entire complaint resolution process.',bg:'https://user-images.githubusercontent.com/108605741/209649558-69f228c2-760d-40e0-9c24-5d3ee93654e5.png'},
    
    {name:'MusicNow',link:'https://akshaynair5.github.io/MusicNow/',Glink:'https://github.com/akshaynair5/MusicNow',bg:'https://user-images.githubusercontent.com/108605741/212974369-44b48844-07a6-4a5e-be32-2c509c1180d5.png',desc:'MusicNow is a website built using React.js that provides users with access to the latest songs topping the charts. Users can also search for their favorite songs, add them to their favorites list, and create their own playlists. The website features a user-friendly interface that allows users to easily navigate and search for songs. The MusicNow website utilizes React.js to provide a smooth and seamless user experience. The website retrieves song data from external APIs and displays them in a visually appealing manner. The website also provides additional information about the songs, such as artist names and album covers.'},
    
    {name:'devbot',link:'https://akshaynair5.github.io/devbot/',Glink:'https://github.com/akshaynair5/devbot',bg:'https://user-images.githubusercontent.com/108605741/216830223-52af03cd-f84d-4aa5-9f5d-168ea39276da.png',desc:'DevBot is a Chat-Bot made using react.js,express and openapi. It has a simple UI through which users can ask questions regarding programing and recieve accurate answers in text form from the API. Personal chat with the bot is stored for you to access it again for future references.'}

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
                        <p><b>{currentProject.name}</b></p>
                        <p>{currentProject.desc}</p>
                        <a href={`${currentProject.Glink}`}><img src="https://img.icons8.com/ios/50/null/github--v1.png"/></a>
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