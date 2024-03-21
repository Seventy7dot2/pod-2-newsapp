import React from 'react'
import {Container} from "@mui/material";
import "./NewsContent.css";
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({newsArray,newsResults,loadmore,setLoadmore}) => {
  return (
    <div>
     <Container maxWidth="md">
        <div className="content">
            <div className='downloadMessage'>
                <span className="downloadtext">
                    for the best experiance use inshorts app
                </span>
            </div>
            {newsArray.map((newsItem)=>{
                return(
                <NewsCard newsItem={newsItem} key={newsItem.title}/>
            )})};
            {
                loadmore<=newsResults && (
                    <>
                    <hr />
            <button className='loadmore' onClick={()=>setLoadmore(loadmore + 20)}>Load More</button>
                    </>
                )
            }







            
        </div></Container>
      
    </div>
  );
};

export default NewsContent;
