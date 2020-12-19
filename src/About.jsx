import logo from './logo.svg';
import './App.css';
import Web from '../src/images/team.svg';
import { NavLink } from 'react-router-dom';
import Common from './Common.jsx';

function About() {
    return (
        <>
            <Common name="Welcome to about page" imgsrc={Web} visit="/contact" btname="Contact Now" />
        </>
    );
}

export default About;

