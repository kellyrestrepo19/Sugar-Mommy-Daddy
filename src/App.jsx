import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';
function App() {
  const [count, setCount] = useState(0)

    return (
      <section className="App">
        <Header/>
        <Main/>
        <Footer/>
      </section>
    )
  }
  

export default App
