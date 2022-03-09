import "./App.css";
import { StartPage } from "./components/starwars/startPage/StartPage.layout";


function App() {
  // const cats = useSelector((state) => state);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //    dispatch(getCatFetch())
  // }, [dispatch]);
  // console.log(cats);
  return (
    <div className="App">
      <StartPage />
    </div>
  );
}

export default App;
