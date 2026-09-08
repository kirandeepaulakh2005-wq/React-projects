import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";

function App() {

  return (
  
    <div className="app-container">
     <Sidebar/>
      <div className="content">
      <Header/>
      <CreatePost/>
      <Footer />
        </div>
      </div>
     
  );
}

export default App;
