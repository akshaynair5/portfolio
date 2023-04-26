import './techstack.css'
import c from '../icons/c-.png'
import css from '../icons/css-3.png'
import html from '../icons/html-5.png'
import php from '../icons/php.png'
import mysql from '../icons/mysql.png'
import firebase from '../icons/firebase.png'
import react from '../icons/react.png'
import node from '../icons/nodejs.png'
import js from '../icons/js.png'
import exp from '../icons/express.png'
import git from '../icons/github.png'

function Techstack(){
    return(
        <div className='techstack'>
            <p className='heading'>Tech Stack</p>
            <div className='icons'>
                <img src={c} className='icon'></img>
                <img src={html} className='icon'></img>
                <img src={css} className='icon'></img>
                <img src={php} className='icon'></img>
                <img src={mysql} className='icon'></img>
                <img src={js} className='icon'></img>
                <img src={react} className='icon'></img>
                <img src={node} className='icon'></img>
                <img src={firebase} className='icon'></img>
                <img src={exp} className='icon'></img>
                <img src={git} className='icon'></img>
                {/* <img src={c} className='icon'></img> */}
            </div>
        </div>
    )
}
export default Techstack