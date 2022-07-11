import './App.css';
import Navbar from './Navbar';
import Issues from './Issues';
import CurrentIssue from './CurrentIssue';
import Team from './Team';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Issues />
      <CurrentIssue />
      <div className='bg1'>
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
