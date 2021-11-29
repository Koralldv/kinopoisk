import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Contact} from './Pages/Contact'
import {NotFound} from './Pages/NotFound'
import {Layout} from './components/Layout'
import {Search} from './Pages/Search'
import {Films} from './Pages/Films'
import {Film} from './Pages/Film'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contacts' element={<Contact/>} />
          <Route path='films' element={<Films/>}/>
          <Route path='films/:filmId' element={<Film/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='search/:id' element={<Search/>}/>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
