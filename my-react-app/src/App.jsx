import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Weather from "./components/Weather/Weather.jsx"
import "./index.scss"

const App = () => {
  return(
    <>
      <div className="wrapper">
        <Header />
        <Weather location="Sacramento" rain={30} day={50} night={35}/>
        <Footer />
      </div>
    </>
  )
}

export default App
