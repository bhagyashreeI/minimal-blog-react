import React,{useState} from 'react'
import Slider from './Slider';
import Box from '@mui/material/Box';
import BlogCard from './BlogCard';
import BlogPost from './BlogPost';
import blogPost1 from "./Images/blogPost1.jpg"
import Footer from './Footer';
import { blogPosts } from '../constant';
import { Button } from '@mui/material';
const Body = () => {
    const categories = ["All","Adventure","Fashion"]
    const [selectedCat,setSelectedCat] = useState('All')
    const [blogPostList,filterBlogPostList] = useState(blogPosts)
    const filterPost = (catName) =>{
        if(catName == 'All') {
            filterBlogPostList(blogPosts)
            setSelectedCat('All')
        }else{
            filterBlogPostList(blogPosts.filter(item=>item.category == catName))
            setSelectedCat(catName)
        }
        
    }
    return (
        <>
            <Slider/>
            <div style={{ paddingLeft:"20px"}}><h1>Popular topics</h1></div>
            <div>
            {
                categories.map((item,index)=>
                            <Button key={index} 
                            className={"categoriesTab "+ (item == selectedCat ? 'active' : '')} onClick={()=>filterPost(item)}>
                            {item}</Button>
                )
            }
                
            </div>
            <Box component="section" 
            sx={{ p:2,display: 'flex', gap: 2, flexWrap: 'wrap', m: 0 }}>
                
           { blogPostList.map(item=>
            (
            <BlogCard key={item.blogImg}
            postedOn={item.postedOn}
                    blogImg={item.blogImg}
                    title={item.title}
                    detail={item.detail}
                    category={item.category}
                    authorName={item.authorName}
                    profession={item.profession}
                    authorImg={item.authorImg}
                    sx={{ flexGrow: 1 }}/>
                    )
            )
        }
                
            </Box>
            <BlogPost blogImg={blogPost1} category='Fashion' postedOn='08.08.2021' />
            <Footer/>
            
        </>
    )
}

export default Body;