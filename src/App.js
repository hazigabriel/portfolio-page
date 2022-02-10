import logo from './logo.svg';
import './App.scss';
import LandingPage from './components/landingPage/landingPage.js';
import AboutPage from './components/aboutPage/aboutPage.js';
import PortfolioPage from './components/portfolioPage/portfolioPage';
function App() {
  return (
    <div>
    <LandingPage />
    <AboutPage />
    <PortfolioPage/>
    </div>
  );
}

export default App;
