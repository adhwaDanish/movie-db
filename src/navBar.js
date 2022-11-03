import React from 'react'
import logo from './assets/logo.png'
import './navBar.css'
export default function navBar() {
let Links = [{name:"Movies",url:"/"},
  {name:"TV Shows",url:"/"},
  {name:"People",url:"/"},
  {name:"More",url:"/"}
];
  return ( 
  <> 
      
      <div className=" bg-primary text-white md:px-10  px-7 w-screen h-11">
      <a href='http://localhost:3000/'><img src={logo} alt="logo"  className="inline-block"/></a>
        <div className=' inline-flex'>
        
                {/*to create a nav bar with no hover
                <li className="inline px-3 pt-2 py-2">
                  <a href={link.url}>{link.name}</a>
                </li>
                */}
                
                <div className='relative'>
                  <button className="peer px-2 py-2 text-white bg-transparent font-bold">Movies</button>
                  
                    <div className="hidden peer-hover:flex hover:flex  w-auto flex-col bg-white drop-shadow-lg">
                    <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Popular</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Airing Today</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">On TV</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Top Rated</a>
                    </div>
                </div>
                <div className=' relative'>
                  <button className="peer px-2 py-2 bg-transparent font-bold">TV Shows</button>
                    <div className="hidden peer-hover:flex hover:flex  w-auto flex-col bg-white drop-shadow-lg">
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Popular</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Airing Today</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">On TV</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Top Rated</a>
                    </div>
                </div>
                <div className=' relative'>
                  <button className="peer px-2 py-2 bg-transparent font-bold">People</button>
                    <div className="hidden peer-hover:flex hover:flex  w-auto flex-col bg-white drop-shadow-lg">
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Popular people</a>
                      
                    </div>
                </div>
                <div className=' relative'>
                  <button className="peer px-2 py-2 bg-transparent font-bold">More</button>
                    <div className="hidden peer-hover:flex hover:flex  w-auto flex-col bg-white drop-shadow-lg">
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Discussion</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Leaderboard</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">Support</a>
                      <a class="px-5 py-1 hover:bg-gray-200 text-black" href="#">API</a>
                    </div>
                </div>
                
                </div>
                <div className='inline-block relative float-right font-bold'>
                  <ul>
                    <li className="px-2 py-2"><a href="https://www.themoviedb.org/login">Login</a></li>
                  </ul>
                </div>
        </div>

  </>
  )
}
