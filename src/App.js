import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent/NewsContent';

function App() {
      const [category, setCategory]=useState("general");
      const [newsArray, setNewsArray] = useState([]);
      const [newsResults, setNewsResults] = useState();
      const [loadmore, setLoadmore] = useState(20);
      const newsApi = async () =>{
        try {
          const news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=17af1c7d703c4a2590aa12e451bb1d5f');
          setNewsArray(news.data.articles);
          setNewsResults(news.data.totalResults);
        } catch (error) {
            console.log(error);
        }
      };
      console.log(newsArray);



      useEffect(() => {
        newsApi();
      },[newsResults,category,loadmore]);

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsContent 
    setLoadmore={setLoadmore}
    loadmore={loadmore}
    newsArray={newsArray} newsResults={newsResults}/>
    </>
  );
}

export default App;
