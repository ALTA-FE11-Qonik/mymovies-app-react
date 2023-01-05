// constructor start
import { Component, ReactNode } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { LoadingAnimation, SkeletonLoading } from "../components/Loading";
import Carousel from "../components/Carousel";



interface DataaType {
  id: number;
  title: string;
  image: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  dataaa: DataaType[];
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      dataaa: [],
      loading: true,
    };
  }
  // Constructor end

  // side effect
  componentDidMount() {
    // Jika dilakukan perubahan nilai dari sebuah state didalam side effect, maka akan dilakukan rerender
    this.fetchData();
  }

  fetchData() {
    axios
      .get(
        ""
      )
      .then((data) => {
        // semua output akan masuk ke then, jika terlihat ada jawaban dari backend
        const {result} = data.data; //destructuring
        this.setState({dataaa: result});
      })
      .catch((error) => {
        // jika tidak menerima jawaban dari backend, maka masuk ke catch, dan biasanya server down
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return(
      <Layout>
        {!this.state.loading && (
         <Carousel
          datas={this.state.dataaa.slice(0, 5)}
            content={(data) =>(
              <div 
                className="w-full h-full flex justify-center items-center bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(
                      rgba(0,0,0,0.5),
                      rgba(0,0,0,0.5)
                    ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                  }}
              >
                  <p className="text-white tracking-widest font-bold break-words text-2x1">
                    {data.title}
                  </p>
              </div>
            )}
          />
        )}
        <div className="grid grid-cols-4 gap-3 p-3">
          {this.state.loading
            ?[...Array(20).keys()].map((data)=>(
              <SkeletonLoading key={data} />
              ))
            : this.state.dataaa.map((data)=>(
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.image}
                />
            ))
          }
        </div>
      </Layout>
    )
  }
}
