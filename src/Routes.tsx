import {

    BrowserRouter as Router,
  
    Routes,
  
    Route,
  
  } from "react-router-dom";
  
  import List from './pages/List'
  
  import Add from './pages/Add'
  
  
  
  
  
  
  
  export function AppRoutes(){
  
      return(
  
          <Router>
  
              <Routes>
  
              <Route path="/" element={<List />} />
  
              <Route path="/add" element={<Add />} />
  
              </Routes>
  
          </Router>
  
      );
  
  }