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
          <div className="blogCategrory">
            {props.category.toUpperCase()}
          </div>
        </div>
        <CardContent sx={{ borderBottom: "1px solid #ccc", height: 200 }}>
          <span className="dateCls" >
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