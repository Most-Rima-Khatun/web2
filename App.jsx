import Navbar from './Navbar';
import Category from './Category';
import First from './First';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Category2 from './Category2';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route index={true} element={<Category/>}/>
    <Route path='/:id' element={<Category2/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
