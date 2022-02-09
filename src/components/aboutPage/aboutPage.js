import aboutImage from "../../assets/about-image.jpg";
import "./aboutPage.scss"
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
                <div class="skillsWrapper">
                    <h2>skills:</h2>
                    <div className="frontEndSkills skillWrapper">
                        <div>
                            <h3>front-end</h3>
                            <div className="skillItems">
                                <p>placeholder</p>
                                <p>placeholder</p>
                                <p>placeholder</p>
                            </div>
                        </div>
                    </div>
                    <div className="toolsSkills skillWrapper">
                        <h3>tools</h3>
                        <div className="skillItems">
                            <p>placeholder</p>
                            <p>placeholder</p>
                            <p>placeholder</p>
                        </div>
                    </div>
                    <div className="miscellanousSkills skillWrapper">
                        <h3>miscellanous</h3>
                        <div className="skillItems">
                            <p>placeholder</p>
                            <p>placeholder</p>
                            <p>placeholder</p>
                            <p>placeholder</p>
                            <p>placeholder</p>
                            <p>placeholder</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default AboutPage