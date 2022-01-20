import twilight from "./media/twilight.jpeg"
import twilight2 from "./media/twilight breaking dawn 1.jpeg"
import twilight3 from "./media/twilight eclipse.jpeg"
import twilight4 from "./media/breaking dawn part 2.jpeg"
import twilight5 from "./media/twilight new moon.jpeg"
import ActionAreaCard from "./components/Cards";
import Grid from '@mui/material/Grid';
import "./App.css"
import Pagehead from "./components/Pagehead"


function App(){
 

const Saga = [
  {
    title: "Twilight",
    releaseDate: 2008,
    runtime: "2h 2m",
    sequelOrder: 1,
    genre: "Fantasy/Romance",
    image: twilight,

  },
  {
    title: "The Twilight Saga: New Moon ",
    releaseDate: 2009,
    runtime: "2h 10m",
    sequelOrder: 2,
    genre: "Fantasy/Romance",
    image: twilight5,

  },
  {
    title: "The Twilight Sage: New Eclipse",
    releaseDate: 2010,
    runtime: "2h 4m",
    sequelOrder: 3,
    genre: "Fantasy/Romance",
    image: twilight3,

  },
  {
    title: "Twilight Saga: Breaking Dawn 1",
    releaseDate: 2011,
    runtime: "1h 57m",
    sequelOrder: 4,
    genre: "Fantasy/Romance",
    image: twilight2,

  },
  {
    title: "Twilight Saga: Breaking Dawn 2",
    releaseDate: 2012,
    runtime: "1h 55m",
    sequelOrder: 5,
    genre: "Fantasy/Romance",
    image: twilight4,

  },
];
    return (
        <div className="App">
          <Pagehead/>
          <Grid container alignItems="center"
            justifyContent="center"  spacing={4} >
            {Saga.map((element) => {
                return (
                  <Grid item xs={4} md={4} lg={2}> 
                  <ActionAreaCard
                  title={element.title} 
                  image={element.image}
                  releaseDate={element.releaseDate}
                  genre={element.genre}
                  runtime={element.runtime}
                  sequelOrder={element.sequelOrder}
                  />
                  </Grid>
                )
            })}
            </Grid>
         
        </div>
    );
  
}

export default App;
