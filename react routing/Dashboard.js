import {Link} from 'react-router-dom'
function Dashboard(){
    return(<div><b>ReactJS lab Dashboard</b>
    <nav>
        <ul>
            
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Registration">Registration</Link></li>
        </ul>
    </nav>
    </div>
    )

}
export default Dashboard;