import { useState, useEffect, FC } from "react";

import { SkeletonLoading } from "../components/Loading";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/useTitle";


const ListFavoriteMovie = () => {
  useTitle("Cinephile - Favorite Movie");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getListFavoriteMovie = localStorage.getItem("FavMovie");
    if (getListFavoriteMovie) {
      setDatas(JSON.parse(getListFavoriteMovie));
    }
    setLoading(false);
  }

  function removeListFavoriteMovie(data: MovieType) {
    /*
    Menghapus data (object) di dalam sebuah array of object.
    TODO: Update tampilan ketika data sudah berhasil dihapus
    TODO: Tambahkan konfirmasi ulang sebelum melakukan penghapusan data untuk mencegah terjadinya salah klik
    */
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-3">
        {loading
          ? [...Array(20).keys()].map((data) => <SkeletonLoading key={data} />)
          : datas.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                image={data.poster_path}
                id={data.id}
                labelButton="REMOVE FROM FAVORITE"
                onClickFav={() => removeListFavoriteMovie(data)}
              />
            ))}
      </div>
    </Layout>
  );
};

export default ListFavoriteMovie;
