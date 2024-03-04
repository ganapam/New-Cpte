import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { NewSidebar } from './components/Sidebar/NewSidebar';
import { Speaking } from './pages/Speaking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Writing } from './pages/Writing';
import { Reading } from './pages/Reading';
import { Listening } from './pages/Listening';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { Home } from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewSidebar />}>
            <Route index path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='pte-speaking' element={<Speaking />} />
            <Route path='pte-writing' element={<Writing />} />
            <Route path='pte-reading' element={<Reading />} />
            <Route path='pte-listening' element={<Listening />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;