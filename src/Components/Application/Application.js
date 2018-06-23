import React, { Component } from 'react';
import collections from '../../data.js'

import {
	Button
} from '../index.js'





export default class Application extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	   		author: '',
			'body': ''
	   }
	}


   showContentFunction(el){
   		let {author, body} = el
   		this.setState({
   			author,
   			body
   		})

   }

   
   loopThroughObjectAndRender(){

   	return (
   	   collections.map((el, i) => {
   	   		var targetName = el.collectionName.split(" ")[i]

   	   		return (
   	   			<div key={i}>
				  <p>
					<Button targetName={targetName}
					        el={el}/>
				  </p>
				  <div className="collapse" id={targetName}>
				    <div className="card card-body">
				       		{
				       			el.articles.map((el, i) => {
				       				return (
        								 <button key={i} onClick={()=>this.showContentFunction(el)} >{el.title} </button>
      
				       			    )
				       			})
				       		}
				    </div>
				  </div>
				</div>
   	   		)
   	  })
	)
}



    render() {

       	let {author, body} = this.state	
        return (
        	<div className="Application">
        		<div className="card card-body">
			     		{
			     			this.loopThroughObjectAndRender()
			     		}
			     		<div className="author"> {author} </div> 
			     		<div className="body"> {body} </div> 
   				 </div>
        	</div>
            
        );
    }
}


