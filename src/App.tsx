// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import EngineeringPrinciples from './components/EngineeringPrinciples';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Technologies />
                  <Experience />
                  <EngineeringPrinciples />
                  <Portfolio />
                  <Contact />
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/projects" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;

