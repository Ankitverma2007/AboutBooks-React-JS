import React, {useState} from "react";
import "./Main.css";
import Logo from "../images/bg2.png";
import Backimg from "../images/bg1.jpg";
import Card from "./Card";
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const searchBook =(evt)=>{
    if(evt.key === "Enter"){
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=`+search+`&key=AIzaSyBcY3bn8ORWFT-O3to68z7MWU9QrME9SJ8&maxResults=40`)
      .then(res=>setBooks(res.data.items))
      .catch(err=>console.log(err))
    }
  }


  return (
    <>
      <div className="header">
        <img className="BackImg" src={Backimg} alt="" />
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Search for a book"
            value={search}
            onChange = {(e) => setSearch(e.target.value)}
            onKeyPress = {searchBook}/>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>Search
            </button>
          </div>
          <img className="Logo" src={Logo} alt="" />
        </div>
      </div>
      <div className="container">
        {<Card book ={books}/>}
        </div>
    </>
  );
};

export default Main;
