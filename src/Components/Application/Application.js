import React, { Component } from 'react';


import {
	Button
} from '../index.js'


const collections =  [
    {
      "collectionName": "About Life Insurance",
      "articles": [
        {
          "title": "Why should I get life insurance?",
          "author": "Walter Woodall",
          "body": "This is an article about why someone should get life insurance. Pretend it was a lot longer with graphics or something cool"
        },
        {
          "title": "What types of life insurance are there?",
          "author": "Walter Woodall",
          "body": "There are lots of different types but really you dont need to know all of them."
        }
      ]
    },
    {
      "collectionName": "About Mira",
      "articles": [
        {
          "title": "Why should I work for Mira?",
          "author": "Walter Woodall",
          "body": "Because we are freaking awesome and attempting to fix a broken industry. Plus we have company happy hours."
        }
      ]
    }
  ]



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


