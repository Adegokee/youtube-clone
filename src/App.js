import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feeds, VideoDetail, ChannelDetail, SearchFeed} from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Feeds/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    

    </BrowserRouter>
   
  );
}

export default App;
