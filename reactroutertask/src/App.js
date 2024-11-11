import './App.css';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import Cyber from './components/Cyber';
import Career from './components/Career';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [ data, setData ] = useState([
    { 
      id : 1,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp",
      page : "fullstack"
    },
    { 
      id : 2,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code.png",
      page : "fullstack"
    },
    { 
      id : 3,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      page : "fullstack"
    },
    { 
      id : 4,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      page : "datascience"
    },
    { 
      id : 5,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2024/07/Top-15-Data-Science-Projects-for-Final-Year-1.png",
      page : "datascience"
    },
    { 
      id : 6,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      page : "datascience"
    },
    { 
      id : 7,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      page : "cyber"
    },
    { 
      id : 8,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      page : "cyber"
    },
    { 
      id : 9,
      title : "10 Best HTML and CSS Project Ideas for Beginners",
      image : "https://www.guvi.in/blog/wp-content/uploads/2022/03/real-time-Cybersecurity-projects-2.png",
      page : "cyber"
    }
  ]);

  const getItems = (page) => {
    return data.filter(item => item.page === page);
  }
  return (
    <>
      <Header />
      <h1 className='mt-5 text-center text-primary'>Router Task</h1>
      <div className='container'>
        <header className="header mt-4">
          <nav>
              <Link to = '/'>ALL</Link>
              <Link to = '/fullStack'>FULL STACK DEVELOPMENT</Link>
              <Link to = '/dataScience'>DATA SCIENCE</Link>
              <Link to = '/cyber'>CYBER SECURITY</Link>
              <Link to = '/career'>CAREER</Link>
          </nav>
          <hr />
          <Routes>
            <Route path='/' element = {<Home data={data} />} />
            <Route path='/fullStack'  element = {<FullStack getItems={getItems} />} />
            <Route path='/dataScience'  element = {<DataScience getItems={getItems} />} />
            <Route path='/cyber'  element = {<Cyber getItems={getItems} />} />
            <Route path='/career'  element = {<Career/>} />
          </Routes>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
