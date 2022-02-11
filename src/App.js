import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar';
import LandingPage from './components/landingPage/landingPage.js';
import AboutPage from './components/aboutPage/aboutPage.js';
import PortfolioPage from './components/portfolioPage/portfolioPage';
import ContactPage from './components/contactPage/contactPage';
function App() {
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
