import { useSelector } from "react-redux";
// selector: mengambil, dispatch: merubah
import { useDispatch } from "react-redux"; 

import Layout from "components/Layout";
import Card from "components/Card";

import { setFavorites } from "utils/redux/reducer/reducer";
import { MovieType } from "utils/types/movie";
import { useTitle } from "utils/hooks/useTitle";
import { RootState } from "utils/types/redux";


const ListFavoriteMovie = () => {
  const dispatch = useDispatch();
  useTitle("Cinephile - Favorite Movie");
  const datas = useSelector((state: RootState) => state.data.favorites)
  // mengambil datanya dg useSelector, tdk perlu useEffect.


  function removeListFavoriteMovie(data: MovieType) {
    /*
    Menghapus data (object) di dalam sebuah array of object.
    TODO: Update tampilan ketika data sudah berhasil dihapus
    TODO: Tambahkan konfirmasi ulang sebelum melakukan penghapusan data untuk mencegah terjadinya salah klik
    */
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    dispatch(setFavorites(filterData))
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-3">
        {datas.map((data) => (
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
