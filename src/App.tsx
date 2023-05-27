import Layout from './base/Layout';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './layout/About';
import Contact from './layout/Contact';
import Experience from './layout/Experience';
import Projects from './layout/Projects';
import Title from './layout/Title';

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
