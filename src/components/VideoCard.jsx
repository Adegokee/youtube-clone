import React from 'react';
import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './utils/constant';

const VideoCard = ({video: {id: { videoId}, snippet}}) => {
    // console.log(videoId, snippet);
  return (
    <Card sx={{width: {md: '299px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet.value} sx={{width: 328, height: 180, objectFit: 'cover'}}/>
        </Link>

        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <Typography variant='subtitle1' fontWeight='bold' color="#FFF" >

                {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}

            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
            <Typography variant='subtitle2' fontWeight='bold' color="gray" >

                {snippet?.channelTitle.slice(0, 40) || demoChannelTitle.slice(0, 40)}
                <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px', mt:'3px'}} />
            </Typography>
        </Link>
        </CardContent>
        
          </Card>
  )
}

export default VideoCard