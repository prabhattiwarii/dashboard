import "./App.css";
import Content from "./layout/content/Content";
import SideBar from "./layout/sidebar/SideBar";

function App() {
  return (
    <>
        <div className="app">
            <SideBar/>
            <Content/>
        </div>
    </>
  );
}

export default App;
