


import { Route, Routes } from 'react-router-dom';
import Resumeform from './Components/Resumeform';
import Resumeview from './ResumeView/Resumeview';
function App() {
  return (
    <div className="App">

     
     <Routes>
     <Route path='/' element={<Resumeform/>} />
      <Route path='/viewresume' element={<Resumeview></Resumeview>} />
     </Routes>
      </div>
  );
}

export default App;
