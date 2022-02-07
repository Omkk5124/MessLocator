
import react, { useState } from "react";
import { a } from "react-router-dom";
import Tilt from 'react-tilt';
import ListOfMess from "./ListOfMess";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Home =()=>{
    const [messName , setmessName] = useState();

    const onInp = (e)=>{
        const {name , value} = e.target;
        //prevVal can be anything like abc xyz it stores the previous values of details
        setmessName(value);
    }
    const useStyles = makeStyles({
        root: {
          width: 345,
        },
        media: {
          height: 350,
        },
      });

      const classes = useStyles();
    return(
        <>
        <div className="home">
        <div className="welcome">
        <h1 id="headMess">Welcome to MessLocator</h1>
        {/* <div className="searchBar">
            <input type="text" placeholder="Search messes" name="name" value={messName} onChange={onInp}/>
            <a href={"/messes/"+messName}><span className="searchIcon" ></span></a>
        </div> */}

        </div>
        <div className="Feature">
        <h1 >Features</h1>
        <div className="cards">
        <Card className={classes.root} className="featureCard">
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://img.freepik.com/free-vector/current-location-concept-illustration_114360-4406.jpg?size=338&ext=jpg"
                title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions>
            <h2>
            <a href="/mess">
                Locate Your Mess
            </a></h2>
            </CardActions>
        </Card>
        <Card className={classes.root} className="featureCard">
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://img.freepik.com/free-vector/discount-concept-illustration_114360-1852.jpg?size=626&ext=jpg"
            title="Contemplative Reptile"
            />
        </CardActionArea>
        <CardActions>
        <h2>
        <a href="" >
            Get Amazing Discounts
        </a></h2>
        </CardActions>
        </Card>
        <Card className={classes.root} className="featureCard">
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://i.pinimg.com/736x/eb/a1/ac/eba1ac607b0420345dc3564ae4b3ad2b.jpg"
                title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions>
            <h2>
            <a href="/login">
                Become Our Partner
            </a></h2>
            </CardActions>
        </Card> 
        </div>
        </div>
        <div className="footer">
            <div class="contact">
                <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="Insta"/>
            </div>
            <div class="contact">
                <img src="https://www.freepnglogos.com/uploads/whatsapp-transparent-logo-20.png" alt="WhatsApp"/>
            </div>
            <div class="contact">
                <img src="https://www.freepnglogos.com/uploads/facebook-logo-f-png-27.png" alt="Facebook"/>
            </div>
            <div class="contact">
                <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter"/>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;