import myimg from './priya.jpg';
import img1 from './image1.jpg';
import img2 from './image2.jpg';
import './App.css';
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img src={myimg} alt="" style={{ width:'190px',height: '250px',position: 'absolute',top:'25%',left:'10%'}}/>
      <div style={{textAlign:'centre', fontSize:'30px' , color:'grey'}}>
        <h2>Personal Info</h2>
      <p> Name:Priya Dharshini G</p>
      <p> From:Tiruppur</p>
      <p> Age:19</p>
      </div>

      <img src={img1} alt="" style={{ width:'180px',height: '200px',position: 'absolute',top:'85%',left:'20%'}}/>
      <div style={{textAlign:'left', fontSize:'30px' , color:'white'}}>
        <h1>Movie Review</h1>
      <p> Movie Name:The Dark Knight</p>
      <p> Released Year:2008</p>
      
      </div>
       <img src={img2} alt="" style={{ width:'180px',height: '200px',position: 'absolute',top:'120%',left:'28%'}}/>
      <div style={{textAlign:'left',top:'119%',left:'30%', fontSize:'30px' , color:'white'}}>
      <p> Movie Name:Moonfall</p>
      <p> Released Year:2022</p>
      
      </div>
      </header>
    </div>
  );
}
export default App;


   