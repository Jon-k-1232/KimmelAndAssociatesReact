import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../../Pages/404';
import About from '../../Pages/About';
import Connect from '../../Pages/Connect';
import Culture from '../../Pages/Culture';
import Home from '../../Pages/Home';
import Sfp from '../../Pages/Sfp';

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Connect' element={<Connect />} />
        <Route exact path='/Culture' element={<Culture />} />
        <Route exact path='/Sfp' element={<Sfp />} />
        <Route path='404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Route>
    </Routes>
  );
}
