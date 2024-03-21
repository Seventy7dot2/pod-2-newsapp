import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  // console.log(newsItem);

  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dno%2Bimage%2Bavailable&psig=AOvVaw3tdyvZD1dWo1upBqfna5hQ&ust=1711015839406000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCosu7MgoUDFQAAAAAdAAAAABAE"
        }
                className="newsImage"
      />
        <div className="newsText">
            <div>
                
                <span className="title">
                    {newsItem.title}
                </span>
               <br /> <span className="author">
                    <a href={newsItem.url} target="_blank">
                        <b> shot </b>
                    </a>
                    <span className="muted">
                    by {newsItem.author ? newsItem.author : "unknown"}
                    </span>
                </span>
            </div>
            <div className="lowerNewsText">
                <div className="description">
                    {newsItem.description}
                </div>
                <span className="readmore">
                    read more at {""}
                    <a href={newsItem.url} target="_blank">
                        <b>{newsItem.source.name}</b>
                    </a>
                </span>
            </div>
        </div>
    </div>
  );
};

export default NewsCard;
