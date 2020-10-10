import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class Search extends Component {
  state = {
    search: "",
    list: [],
  };
  userSearch = event => {
    this.setState({ search: event.target.value });
  };

  doSearch = event => {
    const { search } = this.state;
    const qry = this.state.search;
    // console.log(this.state.search)
    axios
      .get(
        "https://jikan1.p.rapidapi.com/search/anime?status=Anime&type=Anime&sort=desc&q=" +
          qry,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "jikan1.p.rapidapi.com",
            "x-rapidapi-key":
              "010d87c4c4mshef51d812693a599p1fe4f9jsnfa6a18470afb",
          },
        },
      )
      .then(res => {
        this.setState(
          {
            list: res.data.results,
          },
          () => console.log(this.state.list),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="search">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={this.userSearch}
        />
        <button onClick={this.doSearch}className="btn" type="submit">
          Submit
        </button>
        </div>

        <div className="homepage">
          {this.state.list.map(list => (
            <div className="cardok">
              <div className="card card-1">
                <div key={list.mal_id} className="animeinfo">
                  <img
                    src={list.image_url}
                    alt="Ayane"
                    onClick={() =>
                      this.props.history.push("/episodes/" + list.mal_id)
                    }
                  />
                  <p>
                    <span
                      onClick={() =>
                        this.props.history.push("/episodes/" + list.mal_id)
                      }
                    >
                      {list.title}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default withRouter(Search);
	