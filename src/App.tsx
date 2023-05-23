
import './styles/App.css'
import Layout from './layout/Layout' 
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Title from './components/Title'

function App() {

  return (
    <>
    <Layout>
      <Title />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
    </>
  )
}

export default App
