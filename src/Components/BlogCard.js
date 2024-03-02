import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";

const BlogCard = (props) => {
    return <Card sx={{ maxWidth: 310 }}>
        <div style={{ position: "relative" }}>
          <CardMedia style={{ height: 280, width: 310 }} image={props.blogImg} />
          <div style={{ position: "absolute", color: "white", top: 10, right: "10px", background: "#C4C4C4", padding: "5px", fontSize: "0.6rem" }}>
            {props.category.toUpperCase()}
          </div>
        </div>
        <CardContent sx={{ borderBottom: "1px solid #ccc", height: 200 }}>
          <span style={{ color: "#6C757D", fontSize: "12px", lineHeight: "15px" }}>
            {props.postedOn}
          </span>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Avatar alt="Remy Sharp" src={props.authorImg} />
          <p>
            <strong>
              By {props.authorName}
            </strong>
            <br />
            {props.profession}
          </p>
        </CardActions>
      </Card>;
}

export default BlogCard