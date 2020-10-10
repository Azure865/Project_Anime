import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = props => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getAnimeList();
  }, []);

  const getAnimeList = () => {
    axios
      .get("https://jikan1.p.rapidapi.com/top/anime/1/airing", {
        headers: {
          "x-rapidapi-host": "jikan1.p.rapidapi.com",
          "x-rapidapi-key":
            "d3209d838bmsha40c46e880c3c88p115db8jsnf5a8d12e7ddf",
        },
      })
      .then(res => {
        setAnimeList(res.data.top);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="homepage">
      {animeList.map(list => (
        <div className="cardok">
          <div className="card card-1">
            <div key={list.mal_id} className="animeinfo">
              <img
                src={list.image_url}
                alt="Ayane"
                onClick={() => props.history.push("/episodes/" + list.mal_id)}
              />

              <p onClick={() => props.history.push("/episodes/" + list.mal_id)}>
                <span>{list.title}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
