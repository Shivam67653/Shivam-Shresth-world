import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="sont-semibold">Shivam</span>👋
            <br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox 
            text="Worked on many technologies and picked up many skills along the way."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Led multiple projects and collaborated with teams to deliver impactful solutions."
            link="/projects"
            btnText="Have a Look at my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Wanna know more about me? Well, I am just a few keystrokes away."
            link="/contact"
            btnText="Get in Touch"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo