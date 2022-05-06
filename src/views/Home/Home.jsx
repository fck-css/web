import react from "react";
import './Home.scss';

import laptop from '../../images/laptop.png';
import person from '../../images/person.png';
import conversation from '../../images/conversation.png';
import table from '../../images/table.png';
import flexboxImg from '../../images/flexbox-icon.png';
import boxShadowImg from '../../images/box-shadow.png';
import gridImg from '../../images/view-grid.png';
import gradientImg from '../../images/gradient-icon.webp';
import demoToolImg from '../../images/demo-tool.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
        <section className="container hero">
            <div className="hero-text">
                <h1>Our amazing tools make your frontend dev life easier</h1>
                <Link className="btn home-btn" to="/tools">See Tools</Link>
            </div>
            <div className="hero-imgs">
                <img className="laptop-img" src={laptop} alt="" />
                <img className="person-img" src={person} alt="" />
                <img className="table-img" src={table} alt="" />
                <img className="conversation-img" src={conversation} alt="" />
            </div>
        </section>
        <section className="tools">
            <Link to='/box-shadow'>
                <div>
                    <img className="tool-home-img box-shadow-img" src={boxShadowImg} alt="" />
                    <h5 className="mt-3">Box-Shadow Generator</h5>
                </div>
            </Link>
            <Link to='/flexbox'>
                <div>
                    <img className="tool-home-img flexbox-img" src={flexboxImg} alt="" />
                    <h5 className="mt-4">Flexbox Helper</h5>
                </div>
            </Link>
            <Link to='/gradient'>
                <div>
                    <img className="tool-home-img" src={gradientImg} alt="" />
                    <h5 className="mt-3">Gradient Generator</h5>
                </div>
            </Link>
            <Link to='/grid'>
                <div>
                    <img className="tool-home-img" src={gridImg} alt="" />
                    <h5 className="mt-3">Grid Helper</h5>
                </div>
            </Link>
        </section>
        <section className="functionalities">
            <h1>We bring you extra value</h1>
            <div className="demo-tools-div">
                <ul>
                    <li><span>Save your snippets in your profile</span> so you can use them as many times as you want.</li>
                    <li>Our <span>clean and minimalist interface</span> lets you focus<br></br> on what really matters.</li>
                    <li><span>We aggregate the most important tools</span> you need as frontend dev in the same page.</li>
                </ul>
                <img className="demo-tool-img" src={demoToolImg} alt="" />
            </div>
        </section>
        </div>
    )
};

export default Home;