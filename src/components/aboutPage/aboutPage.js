import aboutImage from "../../assets/about-image.jpg";
import "./aboutPage.scss"
import { FaHtml5, FaCss3, FaJs, FaReact, FaSass, FaNpm, FaGit, FaGithub, FaFigma } from 'react-icons/fa';


function AboutPage() {

    return (
        <section className="sectionWrapper" id="about">
            <div className="aboutPageContent sectionContent">
                <div className="description">
                    <div className="leftColumn">
                        <p>
                            Self-taught front end developer located in Bucharest with a strong interest in learning how to write great code. I love taking a methodical approach when solving problems and one of the greatest things I have learned due to coding is the "<i>divide and conquer</i>" paradigm, to which I alway refer when facing a complex situation.
                        </p>
                        <p>
                            My current goal is to obtain an entry level position where I can get hands-on experience and learn how actual products are build.  
                        </p>
                        <p>
                            In the near future I’m looking forward to learn Typescript and Redux. In the distant future I plan to learn about the back-end and become a Full-stack developer. 
                        </p>
                        <p>
                            Besides coding and trying to figure out how the web works I enjoy cycling, cooking, taking pictures and reading. 
                        </p>

                    </div>
                    <div className="rightColumn">
                        <div className="aboutImageWrapper">
                            <img src={aboutImage}></img>
                            <p>*me with some cool background rocks</p>
                        </div>
                    </div>
                </div>
                <div className="skillsWrapper">
                    <h2>technical skills:</h2>
                    <div className="frontEndSkills skillWrapper">
                        <div>
                            <h3>front-end</h3>
                            <div className="skillItems">
                                <div>
                                    <FaHtml5 />
                                    <p>HTML5</p>
                                </div>
                                <div>
                                    <FaCss3 />
                                    <p>CSS3</p>
                                </div>
                                <div>
                                    <FaJs />
                                    <p>Javascript</p>
                                </div>
                                <div>
                                    <FaReact />
                                    <p>ReactJS</p>
                                </div>
                                <div>
                                    <FaSass />
                                    <p>Sass</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="toolsSkills skillWrapper">
                        <h3>tools</h3>
                        <div className="skillItems">
                            <div>
                                <FaNpm />  
                                <p>npm</p>
                            </div>
                            
                            <div>
                                <FaGit />  
                                <p>Git</p>
                            </div>
                            <div>
                                <FaGithub /> 
                                <p>Github</p>
                            </div>
                            <div>
                                <FaFigma /> 
                                <p>Figma</p>
                            </div>
                             
                            {/* FaHtml5, FaCss3, FaJs, FaReact, FaSass, FaNpm, FaGit, FaGithub */}
                        </div>
                    </div>
                    <div className="miscellaneousSkills skillWrapper">
                        <h3>miscellaneous</h3>
                        <div className="skillItems">
                            <div>
                                {/* the adobe suite icons are imported via css using devicon.dev */}
                                <i className="devicon-illustrator-plain"></i>
                                <p>Illustrator</p>
                            </div>
                            <div>
                                <i className="devicon-photoshop-plain"></i>
                                <p>Photoshop</p>
                            </div>
                            <div>
                                <i className="devicon-premierepro-plain"></i>
                                <p>Premiere</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default AboutPage