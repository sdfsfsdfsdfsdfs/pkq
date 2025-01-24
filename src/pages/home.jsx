import { Link,Outlet } from 'react-router-dom';
import './home.css';
function Home() {
    return (
        <div className="home-container">
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">我的</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/articles" className="nav-link">文章</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/photos" className="nav-link">照片</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link">特长</Link>
                    </li>
                </ul>
            </nav>
            <div className='home-content'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Home;