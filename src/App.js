import logo from './logo.svg';
import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      
      <Row 
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row 
      title="Animation"
      fetchUrl={requests.fetchAnimationMovies}/>
      <Row 
      title="Top Rated Movies"
      fetchUrl={requests.fetchTopRatedMovies}/>
      <Row 
      title="Drama"
      fetchUrl={requests.fetchDramaMovies}/>
      <Row 
      title="Comedy"
      fetchUrl={requests.fetchComedyMovies}/>
      <Row 
      title="Musical"
      fetchUrl={requests.fetchMusicalMovies}/>
      <Row 
      title="Western"
      fetchUrl={requests.fetchWesternMovies}/>
      <Row 
      title="Family TV"
      fetchUrl={requests.fetchFamilyTv}/>
    </div>
  );
}

export default App;
