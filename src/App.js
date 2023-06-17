import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import PageNotFound from './screens/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/recipe/:id' element={<RecipeScreen />}></Route>
          <Route path='/about/' element={<AboutScreen />}></Route>
          <Route path='/register/' element={<RegisterScreen />}></Route>
          <Route path='/login/' element={<LoginScreen />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
