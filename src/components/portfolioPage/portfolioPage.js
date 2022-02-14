import './portfolioPage.scss';
import shoppingPageVideo from "../../assets/shoppingCartVideo.mp4";
import cardGameVideo from "../../assets/cardGameVideo.mp4"
import cvGeneratorVideo from "../../assets/cvGeneratorVideo.mp4"
import toDoVideo from "../../assets/toDoVideo.mp4"
function PortfolioPage() {
    return (
        <section className="sectionWrapper" id="portfolio">
            <div className="portfolioContent sectionContent">             
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>Online museum shop</h2>
                        <p>Created using ReactJS and react-router, this is an online souvenir shop inspired by the British Museum.</p>
                        <p>The user can filter products by category, access an individual page for each item, update/delete cart quantity for each item and add promotional codes</p>
                        <div className="portfolioButtons">
                            <a href="https://hazigabriel.github.io/shopping-cart/">
                                <p>://live page</p>
                            </a>
                            <a href="https://github.com/hazigabriel/shopping-cart">
                                <p> &lt;source code /&gt;</p>
                            </a>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={shoppingPageVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>Memory Card game</h2>
                        <p>An API Based game created using ReactJS</p>
                        <p>The game goal is to select each card only once during a round. After selecting each card once, we advance to the next level where we fetch new cards from the API and display them on the page.</p>
                        <p>If the same card is selected twice during a round the game ends</p>
                        <div className="portfolioButtons">
                            <a href="https://hazigabriel.github.io/memory-game/">
                                <p>://live page</p>
                            </a>
                            <a href="https://github.com/hazigabriel/memory-game">
                                <p> &lt;source code /&gt;</p>
                            </a>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={cardGameVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>Resume Generator</h2>
                        <p>CRUD application developed using react</p>
                        <p>We have 2 version of the same page displayed, one in Edit mode and one in Preview mode</p>
                        <p>The user can add and modify information in edit mode and view the final version in Preview mode</p>

                        <div className="portfolioButtons">
                            <a href="https://hazigabriel.github.io/cv-application/">
                                <p>://live page</p>
                            </a>
                            <a href="https://github.com/hazigabriel/cv-application">
                                <p> &lt;source code /&gt;</p>
                            </a>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={cvGeneratorVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                 
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>To Do Tracker</h2>
                        <p>CRUD application created using vanilla Javascript and webpack</p>
                        <p>We can add new To Do categories or select existing ones, each category contains differents tasks that can be deleted/edited or marked as being completede</p>

                        <div className="portfolioButtons">
                            <a href="https://hazigabriel.github.io/toDo/">
                                <p>://live page</p>
                            </a>
                            <a href="https://github.com/hazigabriel/toDo">
                                <p> &lt;source code /&gt;</p>
                            </a>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={toDoVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                 
                
                
                 
            </div>
        </section>
    )
}

export default PortfolioPage