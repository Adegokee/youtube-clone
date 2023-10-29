import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from './utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, seChanneldetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  
console.log(channelDetail);
console.log(videos);
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data) => seChanneldetail(data?.items[0])) 

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items)) 
  }, [id]);

  return (
    <Box minHeight='95vh' pl='150px'>
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(15,2,38,1) 0%, rgba(172,2,207,1) 100%, rgba(14,236,226,1) 100%)', zIndex: 10, height: '300px'}}>
       
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop={'-130px'} />
      </Box>
      <Box diaplay="flex" p="2">
        <Box sx={{mr: { sm: '100px'}}}/>
            <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail