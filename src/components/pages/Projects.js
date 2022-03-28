import React from 'react';

import '../style/Projects.css';
import quiz from "../images/quizGamePic.JPG";
import passwordGen from "../images/RandomPassGenPic.JPG";
import foovie from "../images/FoovieMoodPic.JPG";
import mouse from "../images/mousequest.JPG";

export default function Projects() {
    return (
        <section>
            <div>
                <section className='projectIntroBox'>
                    <section>
                        <h1 className='projectIntro'>Here are my projects from my DU bootcamp. It goes in descending order, the top being oldest, and the bottom being newest.
                            <h1 style={{ fontWeight: 'bold', marginTop: '15px' }}>
                                Click on the project pictures to load the deployed projects
                            </h1>
                        </h1>
                    </section>
                </section>
                <section className="displayProjects">
                    <section className="projects">
                        <section className="theProjects">
                            <div id="projectBox">
                                <a href = 'https://github.com/ZacharyJSwatfigure/Week4QuizHW' target = '_blank'><img id = 'quiz-link' className="imgAdj" src={quiz} /></a>
                                <div className="projectText"> Quiz Game
                                    <p className="projectInnerText">This project required that I create a quiz game. Has a small list of questions that render dynamically on the page requiring an answer by multiple choice. One of my first Javascripting projects.</p>
                                </div>
                            </div>
                            <div id="projectBox">
                                <div className="projectText"> Password Generator
                                    <p className="projectInnerText">A succesful attampt at a user-friendly password generator. Can create a random password that meets all password requirements. Takes user input to ensure specifications are met.</p>
                                </div>
                                <a href = 'https://github.com/ZacharyJSwatfigure/RandPassGenW3HW' target = '_blank'><img id = 'passwordGen-link' className="imgAdj" src={passwordGen} /></a>
                            </div>
                            <div id="projectBox">
                            <a href = 'https://github.com/ZacharyJSwatfigure/FoovieMoodProject' target = '_blank'><img id = 'foovie-link' className="imgAdj" src={foovie} /></a>
                                <div className="projectText"> The Foovie Mood
                                    <p className="projectInnerText">Fun group project requiring that we combine two API's into a front-end web application. Pick a Movie and find a dish from that movies's country of origin.</p>
                                </div>
                            </div>
                            <div id="projectBox">
                                <div className="projectText"> Mouse Quest
                                    <p className="projectInnerText">This was a project that focused on using routes, handbars, and backend code to acheive a functional web application. We decided on creating a forum page based
                                        around a fictional dungeon crawler MMO called 'Mouse Quest'. A visitor to the page is able to create a profile with an email address, unique username, and thier own password to login.
                                        Users are able to create an account and post what they think the best builds are for thier characters. The post will display all user input and the username of the person who posted it.</p>
                                </div>
                                <a href = 'https://github.com/nparker80/MouseQuest' target = '_blank'><img id = 'mouse-link' className="imgAdj" src={mouse} /></a>
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        </section>
    );
}
