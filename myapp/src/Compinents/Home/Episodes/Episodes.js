import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Videos from "./Videos";
let Episodes = props => {
  const [pic, setpic] = useState([]);
  const [discription, setdiscription] = useState([]);
  const [title, settitle] = useState([]);
  const [episodes, setepisodes] = useState([]);

  useEffect(() => {
    forImage();
    forDiscription();
    forEpisoeds();
  }, []);

  let forDiscription = () => {
    axios
      .get("https://api.jikan.moe/v3/anime/" + props.match.params.id)
      .then(result => {
        setdiscription(result.data.synopsis);
        settitle(result.data.title);
      });
  };
  let forImage = () => {
    axios
      .get(
        "https://api.jikan.moe/v3/anime/" + props.match.params.id + "/pictures",
      )
      .then(result => {
        console.log("Image",result)
        setpic(result.data.pictures);
      });
  };
  let forEpisoeds = () => {
    axios
      .get(
        "https://api.jikan.moe/v3/anime/" + props.match.params.id + "/episodes",
      )
      .then(result => {
        console.log("yo",result)

        setepisodes(result.data.episodes);
      });
  };
  console.log(episodes);
  const history = useHistory();
  let handelVideosLink = url => {
    return <Videos urls={url} />;
  };
  return (
    <div className="episode">
      <div className="img">
        {/* Place the image in a slider  */}  
        {pic.slice(-1).map(img => (
          <img src={img.small}></img>
        ))}
        <h1>{title}</h1>
      </div>
          
      <div className="desc">
        <h1>Description:</h1>
        <p>{discription}</p>
      </div>

      <div className="video">
        <h1>Episodes:</h1>
        {episodes.map(episode => (
          <div key={episode.episode_id} className="video-list">
            {episode.episode_id}) <span id="ep-title">{episode.title}</span>
            {/* <Link to="/videos">
              <button onClick={() => handelVideosLink(episode.video_url)} >
              Play
              </button>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Episodes;
