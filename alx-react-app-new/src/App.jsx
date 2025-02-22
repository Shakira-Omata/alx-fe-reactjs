import WelcomeMessage from './components/WelcomeMessage'; 
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile'; 
import Counter from './components/Counter';









function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
      <Counter />
      
    </div>
  );
}

export default App;