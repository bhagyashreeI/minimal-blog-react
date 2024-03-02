import React from 'react'
import Slider from './Slider';
import Box from '@mui/material/Box';
import BlogCard from './BlogCard';
import blogImg1 from "./Images/blogImg1.jpg"
import blogImg2 from "./Images/blogImg2.jpg"
import blogImg3 from "./Images/blogImg3.jpg"
import blogImg4 from "./Images/blogImg4.jpg"
import authorImg1 from "./Images/authorImg1.jpg"
import authorImg2 from "./Images/authorImg2.jpg"
import authorImg3 from "./Images/authorImg3.jpg"
import authorImg4 from "./Images/authorImg4.jpg"
import Footer from './Footer';
const Body = () => {
    const categories = ["All","Adventure","Fashion"]
    return (
        <>
            <Slider/>
            <div style={{ paddingLeft:"20px"}}><h1>Popular topics</h1></div>
            <div style={{ paddingLeft:"20px"}}>
            {
                categories.map((item,index)=>
                            <span key={index} style={{marginRight:"30px",color:'#495057',fontWeight:'bold'}}>{item}</span>
                )
            }
                
            </div>
            <Box component="section" sx={{ p:2,display: 'flex', gap: 2, flexWrap: 'wrap', m: 0 }}>
                
                
                    <BlogCard blogImg={blogImg1} 
                    postedOn='08.08.2021'
                    title='Dream destinations to visit this year in Paris' 
                    detail='Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.' 
                    category='Adventure'
                    authorName='Jennifer Lawrence'
                    profession='Thinker & Designer'
                    authorImg={authorImg1}
                    sx={{ flexGrow: 1 }}/>
                    <BlogCard blogImg={blogImg2} 
                    postedOn='08.08.2021'
                    title='Richird Norton photorealistic rendering as real photos' 
                    detail='Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.'
                    category='Fashion'
                    authorName='David Arthur'
                    profession='Designer'
                    authorImg={authorImg2}
                    sx={{ flexGrow: 1 }}/>
                    <BlogCard blogImg={blogImg3}
                    postedOn='08.08.2021' 
                    title='Dream destinations to visit this year in Paris'
                    detail='Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.' 
                    category='Adventure'
                    authorName='Sarah Lawrence'
                    profession='Journalist'
                    authorImg={authorImg3}
                    sx={{ flexGrow: 1 }}/>
                    <BlogCard blogImg={blogImg4} 
                    postedOn='08.08.2021'
                    title='Dream destinations to visit this year in Paris'
                    detail='Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.'
                    category='Adventure'
                    authorName='Jennifer Lawrence'
                    profession='Thinker & Designer'
                    authorImg={authorImg4}
                    sx={{ flexGrow: 1 }}/>
               
                
            </Box>
            <Footer/>
            
        </>
    )
}

export default Body;