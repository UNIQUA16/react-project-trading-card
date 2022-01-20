import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../App.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';




export default function ActionAreaCard({
    title,
    releaseDate,
    runtime,
    sequelOrder,
    genre,
    image,
}) {
    const [value, setValue] = React.useState(0);

  return (
    <Card className= "cardarea" sx={{height: '400px', width: '200px'}}>
      {/* <CardActionArea className= "cardarea"> */}
        <CardMedia className = 'pic'
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent className= "cardarea">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {releaseDate}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Runtime: {runtime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sequel Order: {sequelOrder}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre: {genre}
          </Typography>
          <Typography>Ratings</Typography>
          <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }} 
          />
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}