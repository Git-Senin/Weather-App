
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Weather from "./components/Weather/Weather.jsx"
import "./index.scss"

export default function App() {

  return(
    <div className="wrapper">
      <Header />
      <Weather/>
      <Footer />
    </div>
  )  
}
