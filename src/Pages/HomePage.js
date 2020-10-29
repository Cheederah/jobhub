import React, { useState, useRef,useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Header from '../components/Header';
import HeroArea from '../components/HeroArea';
import JobList from '../components/JobList';
import AboutArea from '../components/AboutArea';
import StartSearch from '../components/StartSearch';
import Footer from '../components/Footer';
import Loader from '../components/Loader';





const API = "http://jobs.github.com/";
const proxyAPI = `https://cors-anywhere.herokuapp.com/${API}`;


const HomePage = () => {
  
  const [jobs, setJobs] = useState([]);
  const [description, setDescription] = useState("developer");
  const [location, setLocation] = useState("anywhere");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);


  
    useEffect(() => {
      console.log("category", category);
      setLoading(true);
      fetchSearch();

    }, [offset])

  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    }

  const handleLocationChange = (e) => {
      setLocation(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    
}

  function fetchSearch() {
    console.log("test");
    let url = `${proxyAPI}positions.json?description=${description}&full_time=${category}&location=${location}`;
    console.log("url", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("result", data);
        const slice = data.slice(offset, offset + perPage)
        setJobs(slice);
        setPageCount(Math.ceil(data.length / perPage))
        setLoading(false);
        scrollTo();
      })
      .catch((error) => console.log("Oops! . There Is A Problem" + error));
  };

//   const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// // General scroll to element function
// const myRef = useRef(null)

// const useMountEffect = fun => useEffect(fun, [])

//  useMountEffect(() => scrollToRef(myRef))


  const onButtonSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    fetchSearch();
    // scrollToRef(myRef);
    setDescription("");
    setLocation("");
   
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

const scrollToJobs = () => {
  scroll.scrollTo(800);
}

const scrollToAbout = () => {
  scroll.scrollTo(2500);
}

const scrollTo = () => {
  scroll.scrollTo(0);
}
    return (
      <div>
        {
          loading ? (
            <Loader />
          ):(
            ""
          )
        }
        <Header scrollToJobs={scrollToJobs} scrollToAbout={scrollToAbout} scrollTo={scrollTo}/>
        <HeroArea 
        onDescriptionChange={handleDescriptionChange} 
        onLocationChange={handleLocationChange} 
        onCategoryChange={handleCategoryChange}
        onSubmit={onButtonSubmit}
        />
        
        <JobList jobs={jobs} />
        
        { jobs ? (
          <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        ) : (
          ""
        )}
        
        
        <AboutArea scrollToJobs={scrollToJobs}/>
        <StartSearch scrollTo={scrollTo}/>
        <Footer />
        
      </div>

    )
}

export default HomePage;
