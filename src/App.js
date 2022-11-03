import logo from './assets/logo.png';
import './App.css';
import NavBar from './navBar';

function App() {
  
  return (
    <>
    <div className="">
    <NavBar/>

    <div className='bg-black pb-16'>
      <div className="font-bold text-3xl px-10 pt-12 text-white ">
        Welcome.
      </div>
      <div className="font-semibold text-xl px-10 pb-10 text-white">
        Millions of movies, TV shows and people to discover. Explore now.
      </div>
      <div className="flex flex-row">
        <input className="w-10/12 grow-1 focus:border-none rounded-3xl ml-10 h-18 border-spacing-y-0.5" type={"text"} 
        placeholder="Search for a movie, tv show, person......."/>
        <button className="bg-teal-400 px-5  rounded-3xl">Search</button>

        
      </div>

    </div>
    </div>
    
    
    </>
    
  );
}

export default App;
