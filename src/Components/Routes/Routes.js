import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../../Pages/404';
import About from '../../Pages/About';
import Connect from '../../Pages/Connect';
import Resources from '../../Pages/Resources';
import Home from '../../Pages/Home';
import Sfp from '../../Pages/Sfp';

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Connect' element={<Connect />} />
        <Route exact path='/Resources' element={<Resources />} />
        <Route exact path='/Sfp' element={<Sfp />} />
        <Route path='404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Route>
    </Routes>
  );
}
