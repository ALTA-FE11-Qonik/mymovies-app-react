import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { SkeletonLoading } from '../components/Loading';


interface DataType{
  id: number;
  title: string;
  poster_path: string;
}

interface PropsType{}

interface StateType{
  loading: boolean;
  dataa: DataType[];
}

export default class ListFavoriteMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType){
    super(props);
    this.state ={
      dataa: [],
      loading: true,
    }
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData(){}

  render(){
    return(
      <Layout>
        <div className="grid gird-cols-4 gap-3">
          {this.state.loading
            ? [...Array(20).keys()].map((data)=>(
              <SkeletonLoading key={data} />
            ))
            : this.state.dataa.map((data)=>(
              <Card 
                key={data.id}
                title={data.title}
                image={data.poster_path}
              />
            ))
            }
        </div>
      </Layout>
    )
  }
}
