import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from './Components/Add';
import Edit from './Components/Edit';
import Show from './Components/Show';
import Delete from './Components/Delete';

function App() {

  return (
    <>
      <Router>
        <div className='container-fluid bg-img'>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/new' element={<Add />}  />
          <Route path='/:id/edit' element={<Edit />}  />
          <Route path='/show/:id' element={<Show />}  />   
          <Route path='/delete/:id' element={<Delete />}  />   
        </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
