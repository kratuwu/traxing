import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SummaryPage from './pages/SummaryPage';

function App() {
    return (
      <div>
        <Routes>
          <Route  path='/' element={<MainPage/>} />
          <Route  path='/summary' element={<SummaryPage/>} />
        </Routes>
      </div>
    );
}

export default App;
