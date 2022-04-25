import react from "react";
import './Home.scss';

import laptop from '../../images/laptop.png';
import person from '../../images/person.png';
import conversation from '../../images/conversation.png';
import table from '../../images/table.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
        <section className="container hero">
            <div className="hero-text">
                <h1>Our amazing tools make your frontend dev life easier</h1>
                <Link className="btn home-btn" to="/">See Tools</Link>
            </div>
            <div className="hero-imgs">
                <img className="laptop-img" src={laptop} alt="" />
                <img className="person-img" src={person} alt="" />
                <img className="table-img" src={table} alt="" />
                <img className="conversation-img" src={conversation} alt="" />
            </div>
        </section>
        <section className="tools">
            <h3>Linear Gradient</h3>
            <h3>FlexBox Generator</h3>
            <h3>Box-Shadow</h3>
            <h3>Button Generator</h3>
        </section>
        <section className="functionalities">

        </section>
        </div>
    )
};

export default Home;