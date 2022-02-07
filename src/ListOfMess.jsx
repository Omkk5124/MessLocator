import React, { Component } from 'react';
import axios from 'axios';
import "./ListofMess.css"
const chilli = process.env.PUBLIC_URL+"/pic/chilli";


const MessCard = (props) => {
    return(
    //  <div id="messcard" >
    //      <div id="messposter">
    //          <img src={props.val.link} alt="poster"/>
    //      </div>
    //      <div id="messTitle">
    //      <h1>{props.val.name}</h1>
    //      <p>{props.val.address}  {props.val.phone}</p>
    //      <p>{props.val.clgName}</p>
    //      <button >Register Now</button>
    //      </div>
    //  </div> 
     <>
     <div id="home">
     <div className="headMess" id="headMess">
          <h1>{props.val.name}</h1>
          <p>{props.val.address} . {props.val.phone}</p>
          <img src={props.val.link} />
        </div>
        <div className="menu" id="menu">
        <img src={process.env.PUBLIC_URL + "/pic/flag.png"} id="flag"/>
          <div className="cont1">
            <img src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" />
          </div>
          <div className="cont2">
            <h2>Today's Menu</h2>
            <br/>
            Roti
            <br/>
            Dal-Rice
            <br/>
            Punjabi Non-Veg
            <br/>
            Lassi
          </div>
        </div>
        <div className="Rate">
        <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"/>
            <div id="prize">
            <h2>Rate</h2><br/>
            Rs.3000 Onetime<br/>Rs.4500 Twotime</div>
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
    );
 }

export default class MessList extends Component {
        constructor(props) {
          super(props);
      
        this.state={mess:{}}
        }
      
        componentDidMount() {
            axios.get('http://localhost:5000/messes/'+this.props.match.params.id)
            .then(response => {
                this.setState({mess:response.data});
                console.log(this.state.mess);
              })
              .catch((error) => {
                console.log(error);
              })  
              
        }
      
        messList() {
              return <MessCard val={this.state.mess} />;
          }
        
      
        render() {
          return (
              <>
             <div className="messcards">
              {this.messList()}
            </div>
            </>
          )
        }
      }