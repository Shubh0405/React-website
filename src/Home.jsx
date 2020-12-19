import logo from './logo.svg';
import './App.css';
import Web from '../src/images/rocket.svg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

function Home() {
    return (
        <>
            <Common name="Grow your business with" imgsrc={Web} visit="/service" btname="Get Started" />
        </>
    );
}

export default Home;