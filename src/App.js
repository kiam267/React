import {BrowserRouter, Routes,Route} from 'react-router'
import About from './Components/About'
import Home from './Components/Home'
import Nav from './Components/Nav';
import Post from './Components/Post';
import Posts from './Components/Posts';
import Error from './Components/Error';


 function App(){

  
   
  return (
    <BrowserRouter>
      <Routes>    
       

        
        <Route path="/" Component={Nav}>
        <Route index path="/" Component={Home}/>
        <Route path="/post" Component={Post}/>
          <Route path="/about" Render={ <About number="5"/>} />
          {/* dunamic */}
          <Route path="/posts/:category" Component={Posts} />

        <Route path="*" Component={Error}/>
          </Route>
         
      </Routes>
    </BrowserRouter>
  )
}
export default App;

