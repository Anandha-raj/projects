import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Sections from './components/Sections';
import Testimonials from './components/Testimonials';
import './App.css';
import showCase1 from './images/bg-showcase-1.jpg';
import showCase2 from './images/bg-showcase-2.jpg';
import showCase3 from './images/bg-showcase-3.jpg';
import t1 from './images/testimonials-1.jpg';
import t2 from './images/testimonials-2.jpg';
import t3 from './images/testimonials-3.jpg';

function App() {
  const heroText1 = "Generate more leads with a professional landing page!";
  const heroText2 = "Ready to get started? Sign up now!";
  return(
    <>
      <Header />
      <Hero printText = {heroText1} />
      <Features />
      <section className="showcase">
          <div className="container-fluid p-0">
              <Sections 
              showCase={1}
              title="Fully Responsive Design"
              text="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
              img= {showCase1} />
              <Sections 
              showCase={0}
              title="Updated For Bootstrap 5"
              text="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
              img= {showCase2} />
              <Sections 
              showCase={1}
              title="Easy to Use & Customize"
              text="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
              img= {showCase3} />
          </div>
      </section>
      <Testimonials t1={t1} t2={t2} t3={t3} />
      <Hero printText = {heroText2} />
      <Footer />
    </>
  )
}

export default App;