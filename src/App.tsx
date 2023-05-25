import Layout from './layout/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Title from './components/Title';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Title />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
