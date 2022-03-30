import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CalendarScreen, Home } from './components/Calendar/CalendarScreen';
import { Login } from './components/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <CalendarScreen /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="*" element={ <CalendarScreen /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
