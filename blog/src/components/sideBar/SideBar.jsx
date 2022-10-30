import './SideBar.css';
import aboutMe from '../../assets/aboutMe.png';

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sidebarItem'>
                <span className="sidebarTitle">About Me</span>
                <img className='aboutMeImg' src={aboutMe} alt="about me" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, laborum exercitationem. Possimus officia quo mollitia? Culpa maiores quaerat repellendus.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Networking</li>
                    <li className="sidebarListItem">HTML</li>
                    <li className="sidebarListItem">CSS</li>
                    <li className="sidebarListItem">Java Script</li>
                    <li className="sidebarListItem">React</li>
                    <li className="sidebarListItem">Java</li>
                    <li className="sidebarListItem">Python</li>
                    <li className="sidebarListItem">Operating System</li>
                </ul>
            </div>
        </div>
    )
}