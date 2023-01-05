import React, { Component } from "react";
import Layout from "../components/Layout";
import { LoadingAnimation } from "../components/Loading";


type GenreType = {
  id?: number;
  name?: string;
}

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
}

interface PropsType {}

interface StateType {
  loading: boolean;
  data: DataType;
}

export default class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`, {method: "GET"}
    )
      .then((response) => response.json()) //untuk konversi JSON
      .then((data) => { // masuk ke then jika berhasil
        this.setState({ data }); 
        console.log(data);
      })
      .catch((error) => { // catch apabila server gagal
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
            <LoadingAnimation />
        ) : (
            <div className="flex">
                <img 
                    src={`https://image.tmdb.org/t/p/w500 ${this.state.data.poster_path}`} 
                    alt={this.state.data.title}
                />
                <p>Title: {this.state.data.title}</p>
                <p>Overview: {this.state.data.overview}</p>
                <p>Release Date: {this.state.data.release_date}</p>
                <p>Runtime: {this.state.data.runtime}</p>
            </div>
        )}
      </Layout>
    );
  }
}
