import React from 'react';
import './Main.css';
import Def from '../images/def.webp';
const Details = ({show,item,onClose}) => {

    if(!show){
        return null;
    }
    let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;


  return (
    <div className='overlay'>
    <div className="overlay-inner">
        <button className='close'onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
        <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
                <h2>{item.volumeInfo.title}</h2>
                <h3>{item.volumeInfo.authors}</h3>
                <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
                <a href={item.volumeInfo.priviewLink}><button>More</button></a>
            </div>
        </div>
        <div className="description">
        {item.volumeInfo.description} </div>
    </div>
    </div>
  );
}

export default Details;
