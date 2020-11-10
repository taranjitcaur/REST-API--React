import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './results';
import Pagination from './pagination';

const App = () => {
  //const {data, set} = useState()
  const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  const [data, setData] = useState([])
  const [next, setnext] = useState()
  const [previous, setPrevious] = useState()
  const [loading, setLoading] = useState(false)
  //console.log(url)
  useEffect(() => {
    setLoading(true)
    let cancel
    axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    }, {cancelToken: new axios.CancelToken(c => cancel =c )} ).then(function (response) {
        setLoading(false)
        setData(response.data.results)        
        setnext(response.data.next)        
        setPrevious(response.data.previous)
    });
    return () => cancel() 
  }, [url])  
  
  if(loading) return "Loading.."
  const handleNextClick = (value) => {
    //console.log(value)
    setURL(value);
  }
  const handlePreviousClick = (value) => {
    setURL(value);
  }

  console.log(data)
  return (    

    <div className="App">        
         <Results data={data}/>
         <Pagination next={next} previous={previous} onNextClick={handleNextClick} onPreviousClick={handlePreviousClick}/>        
    </div>
  );
}
export default App;
