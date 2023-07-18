import { Provider } from "react-redux";
import Header from "../components/header/Header";
import NewHeader from "../components/header/NewHeader";
import ImageSlider from "../components/imageslider/ImageSlider";
import TopMenu from "../components/topMenu/TopMenu";
import { UsersView } from "../views";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import { store } from "./store";

function App() {
  return (
    <div className="p-0 m-0">
      <Provider store={store}>
        {/* <UsersView /> */}
        <Header />
        {/* <div className=""> */}
        <TopMenu />
        <ImageSlider />
        <FeaturedCategory />
        {/* </div> */}
        {/* <NewHeader /> */}
      </Provider>
    </div>
  );
}

export default App;
