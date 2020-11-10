import React from 'react';
const Results = ({data}) => {  
   const renderedItems =  data.map((item, index) => { 
        return <li key={item['name']}>{item['name']}</li>
    })
return <ul> Name: {renderedItems}</ul>
    //console.log(items);
    //return 'sssssResul'
}   

export default Results