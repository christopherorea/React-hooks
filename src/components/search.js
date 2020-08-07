import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{

  const [term,setTerm ] = useState('');
  const [results,setResults] = useState([]);

   useEffect(()=>{
      const search = (async ()=>{
       const data = await axios.get('https://es.wikipedia.org/w/api.php',{
         params:{
           action: 'query',
           list: 'search',
           origin : '*',
           format : 'json',
           srsearch: term
         }
       });

        setResults(data.data.query.search);
      });

      const timer= setTimeout(()=>{
        if(term){
          search();
        }
      },1000);

      return(()=>{
        clearTimeout(timer);
      });
      
   },[term]);

   const renderResutls = results.map(result =>{
     return(
        <div className='item' key={result.pageid}>
          <div className='right floated content'>
            <a className='ui button'
            href={`https://es.wikipedia.org?curid=${result.pageid}`}>Go</a>
          </div>
          <div className='content'>
            <div className='header'>
                {result.title}
            </div>
            <span dangerouslySetInnerHTML={{__html:result.snippet}}>
            </span>
          </div>
        </div>
      );
   });

	return(
		<div>
			<div className='ui form'>
       <div className='field'>
         <label>Enter Search Term</label>
         <input 
         value = {term}
         onChange = {e=> setTerm(e.target.value)}
         className="input"
         />
       </div> 
       <div className='ui celled list'>
         {renderResutls}
       </div>  
      </div>
		</div>
	);
};

export default Search;