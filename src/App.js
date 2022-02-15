import './App.scss';
import Navbar from './components/navbar/navbar';
import LandingPage from './components/landingPage/landingPage.js';
import AboutPage from './components/aboutPage/aboutPage.js';
import PortfolioPage from './components/portfolioPage/portfolioPage';
import ContactPage from './components/contactPage/contactPage';
function App() {
 
  function handleScroll() {
    let landing = document.querySelector("#landing").offsetHeight;
    let about = document.querySelector("#about").offsetHeight;
    let portfolio = document.querySelector("#portfolio").offsetHeight;
    let contact = document.querySelector("#contact").offsetHeight;

    let menuItems = document.querySelectorAll(".menuItem")
    let currentScrollIndex = document.documentElement.scrollTop;
    
    function removeActiveClass() {
      menuItems.forEach(e => e.classList.remove("active"));
    }

    function addActiveClass(item) {
      item.classList.add("active");
    }

    function hideNavbar(){
       document.querySelector('.navbar').classList.add("navbarHidden")
       document.querySelector('.navbar').classList.remove("navbarDisplayed")
    }
    function showNavbar(){
      document.querySelector('.navbar').classList.remove("navbarHidden")
      document.querySelector('.navbar').classList.add("navbarDisplayed")
    }
    if(currentScrollIndex < landing -1 ) {
      removeActiveClass();
      hideNavbar()
      
    } else if(currentScrollIndex < landing + about - 2 )  {
      removeActiveClass();
      addActiveClass(menuItems[0]);
      showNavbar()
  
    } else if(currentScrollIndex < landing + about + portfolio -3  ) {
      removeActiveClass();
      addActiveClass(menuItems[1]);
      showNavbar()
    } else if(currentScrollIndex <= landing + about + portfolio + contact  - 4) {
      removeActiveClass();
      addActiveClass(menuItems[2]);
      showNavbar()
  
    }
    
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <PortfolioPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
