import React from 'react';
const Pagination = (props) => {
    //console.log(props)
      return(
        <React.Fragment>
        <div>      
      {props.previous && <button onClick={(e) => props.onPreviousClick(e.target.value)} value={props.previous}>Previous</button> }
            {props.next && <button onClick={
                (e) => {
                    console.log(e.target.value)
                     props.onNextClick(e.target.value)
                }
            } value={props.next}>Next</button> }
        </div>
        </React.Fragment>
    );
    //return 'ddd'
}
export default Pagination;