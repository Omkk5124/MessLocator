
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Mess.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchBar from "material-ui-search-bar";


const MessCard = (props) => {
  const useStyles = makeStyles({
    root: {
      width: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
   return(
    <>
    {/* <div className="messcard" >
        <div className="messposter">
            <img src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg" alt="poster"/>
        </div>
        <div className="messTitle">
        <h1>{props.mess.name}</h1>
        <p>{props.mess.address}  {props.mess.phone}</p>
        <p>{props.mess.clgName}</p>
        <a href={"/messes/"+props.mess._id}>
            <button >Register Now</button>
        </a>
        </div>
    </div> */}
    <Card className={classes.root} id="Card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.mess.link}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.mess.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.mess.address}  {props.mess.phone}
          </Typography>
          <Typography>
            { props.mess.clgName.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={"/messes/" + props.mess._id}> Register Now </a>
        </Button>
      </CardActions>
    </Card>
</>
   );
}


export default class MessList extends Component {
  constructor(props) {
    super(props);

    this.state = {messes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/messes/')
      .then(response => {
        this.setState({ messes: response.data })
        console.log(this.state.value);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  messList() {
    return this.state.messes.map(currentmess => {
      return <MessCard mess={currentmess} />;
    })
  }
  
  render() {
  // console.log(this.state.value);
    return (
        <>
        <div className="body" id="Body">
        <div id="header">
          <h3>Messes List</h3>
          <span className="search">
          <SearchBar 
              value={this.state.value}
              onChange={(newValue) => this.setState({ value: newValue })}
            /></span>
        </div>
        
  
       <div className="messcards">
        { this.messList() }
      </div>
        <footer id="footer">
          <div class="container-fluid ">
              <div class="row text-center">
                  <div class="col-md-4">
                      <img src="https://image.freepik.com/free-vector/chef-food-restaurant-logo_7085-179.jpg" alt="LOGO" id="logo"/>
                      <br/><br/>
                      <h5>
                          Mobile Site and apps
                      </h5>

                      <ul class="sites">
                          <li>
                              <i class="fas fa-globe"></i>
                              <a href="">www.oursitename.com</a>
                          </li>
                          <li>
                              <i class="fab fa-android"></i>
                              <a href="">OurAppName</a>
                          </li>
                          <li>
                              <i class="fab fa-apple"></i>
                              <a href="">OurAppName</a>
                          </li>
                      </ul>


                  </div>

                  <div class="col-md-4">

                      <h5>Follow Us On</h5>

                      <ul class="social">
                          <li>
                              <i class="fab fa-facebook"></i>
                              <a href="">
                                  facebook
                              </a>
                          </li>
                          <li>
                              <i class="fab fa-twitter"></i>
                              <a href="">
                                  twitter
                              </a>
                          </li>
                          <li>
                              <i class="fab fa-instagram"></i>
                              <a href="">
                                  instagram
                              </a>

                          </li>
                          <li>
                              <i class="fab fa-youtube"></i>
                              <a href="">
                                  youtube
                              </a>
                          </li>
                      </ul>

                  </div>
                  <div class="col-md-4 text-center">
                      <h5>Community</h5>
                      <ul>
                          <li><i class="far fa-sticky-note"></i><a href="">Write for Us</a></li>
                          <li><i class="fas fa-phone"></i><a href="">Contact Us</a></li>
                          <li><a href="">Give a feedback!</a></li>
                      </ul>
                  </div>

                  <div class="col-12">
                      <p>&copy; 2020 OurSitename.com . All Rights Reserved.</p>
                  </div>
              </div>
          </div>
      </footer>
      </div>
      </>
    )
  }
}