import React from 'react';

export default (props) => {
	let {el, targetName} = props
  return (
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={'#' + targetName} aria-expanded="false" aria-controls="collapseExample">
				 			 {el.collectionName}
				    </button>
  )
}

