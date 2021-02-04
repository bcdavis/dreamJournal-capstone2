import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link as RRLink } from "react-router-dom";

export const JournalEntry = ({ item, deleteThisItem }) => {

	//controls the clickable-ness of the checkbox
	const [isLoading, setIsLoading] = useState(true);

	// const handleGotIt = (event) => {
	// 	setIsLoading(true); // turn button off -- disable it
	// 	//make a copy of original data
	// 	const updatedItem = { ...item }
	// 	//set value to opposite
	// 	updatedItem.gotIt = updatedItem.gotIt ? false : true;
	// 	//invoke function on parent
	// 	//why is it on the parent? So that when it finishes the update,
	// 	//we can invoke getAll and update the ChrisList state
	// 	iGotIt(updatedItem)
	// }

	const handleDelete = () => {
		setIsLoading(true);
		deleteThisItem(item.fbid);
	}

	useEffect(() => {
		setIsLoading(false)
	}, [item])

	//date info: https://www.tutorialspoint.com/es6/es6_date.htm
	return (
			<Card className="card2 flex-column"> 
				<Card.Header className="card2-top flex-row">
					<div class="card2-top-left">
						<div class="card2-date flex-row">
							<p><strong>12</strong></p>
							<p><strong>Feb</strong></p>
							<p><strong>2021</strong></p>
						</div>
						<div class="card2-fav-star">
							<i className="fa fa-star" />
						</div>
					</div>
					<div class="card2-attributes flex-row card2-top-right">
						<div class="attr-text2">
							<p>Lucid</p>
						</div>
						<div class="attr-text2">
							<div>
                				<i className="fa fa-volume-up" />
              				</div>
						</div>
					</div>
				</Card.Header>
				<Card.Body className="card-right round-corners">
					<div class="card2-content flex-row padding-10px">
						<div class="card-content-mid flex-col">

							<div class="card2-content-preview">

								<div class="content-pre-title2">
									<h3>{item.title}</h3>
								</div>
								
								<div class="content-pre-text2">
                        			<p>{item.text}</p>
								</div>

							</div>
						</div>
						<div class="card2-content-options">
							<button type="button">
								<i class="bi bi-three-dots-vertical"></i>
							</button>
						</div>
						
					</div>
					
				
				</Card.Body>
			
		
			
				{/* // <div className="entryCard flex-col">
				// 	{/* <div className="overallContainer">
				// 		<a href="#" className="ellipsis">
				// 			<span>I am a link that wraps a lot and goes down to at least four lines. I should only show three lines though. I am a link that wraps a lot and goes down to at least four lines. I should only show three lines though.</span>
				// 		</a>
				// 	</div> */}


				{/* // 	<Card className="card-right round-corners mb-2 text-white">
				// 		<Card.Header>
				// 		<div class="card2-top flex-row">
				// 		<div class="card2-top-left">
				// 			<div class="card2-date flex-row">
				// 				<p><strong>12</strong></p>
				// 				<p><strong>Feb</strong></p>
				// 				<p><strong>2021</strong></p>
				// 			</div>
				// 			<div class="card2-fav-star">*</div>
				// 		</div>
				// 		<div class="card2-attributes flex-row card2-top-right">
				// 			<div class="attr-text2">
				// 			<p>Lucid</p>
				// 			</div>
				// 			<div class="attr-text2">
				// 			<p>Audio</p>
				// 			</div>
				// 		</div>
				// 	</div>
				// 		</Card.Header>
				// 		<Card.Body >
				// 			<Card.Title>{item.title}</Card.Title>
				// 			<Card.Subtitle>Date added: <strong>{item.dreamdate && new Date(item.dreamdate).toLocaleDateString()}</strong></Card.Subtitle>
				// 			<Card.Text>
				// 				Description: <strong>{item.details}</strong>
				// 			</Card.Text>
				// 		</Card.Body>
				// 		<Card.Body className="text-right" >
				// 			<div><RRLink className="btn ouline-lite btn-sm" style={{ width: "7.25em" }} disabled={isLoading} to={`/chrisItem/edit/${item.fbid}`}>Edit</RRLink></div>
				// 			<div><Button onClick={handleDelete} variant="outline-lite" size="sm" style={{ width: "7.25em" }} disabled={isLoading}>Remove</Button></div>
				// 		</Card.Body>
				// 	</Card>
				// </div> */} 
			</Card>
	)
}