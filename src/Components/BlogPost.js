import { Button, Typography } from "@mui/material";

const BlogPost = ({ blogImg, postedOn, category }) => {
  return <div style={{ position: "relative" }}>
      <img src={blogImg} className="blogPostHome" />
      <div className="blogPostInfo">
        <Button variant="contained" style={{ color: "white", background: "#C4C4C4", padding: "5px", fontSize: "0.6rem" }} disabled>
          {category.toUpperCase()}
        </Button>
        <Typography variant="h5" color="white">
          Richird Norton photorealistic<br /> rendering as real photos
        </Typography>
        <Typography variant="body2" color="white" sx={{ mt: 2, mb: 2 }}>
          Progressively incentivize cooperative systems through technically sound<br /> functionalities. The credibly productivate seamless data.
        </Typography>
        <div style={{ border: "1px solid #E5E5E5" }} />
        <span className="date2Cls" >
          {postedOn}
        </span>
      </div>
    </div>;
};

export default BlogPost;