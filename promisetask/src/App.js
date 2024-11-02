import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  async function fetchItems(){
     try{
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const data = await response.json(response);
        displayItems(data);
     }catch(error){
      console.log(error);
     }
  }

  fetchItems()

  function displayItems(data){
    let html = '';
    data.forEach(item => {
      html += `<div key=${item.id} class="card mx-2 my-2" style="height:350px;width:400px">
              <div class="card-body">
                <img src=${item.url} className="img-thumbnail" alt="image" style="height:300px;width:350px" />
              </div>
            </div>`;
    });
    document.getElementById('renderHTML').innerHTML = html;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <h1 className="text-center mt-3">Gallery</h1>
        <div id="renderHTML" className='row mx-auto mt-5'></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
