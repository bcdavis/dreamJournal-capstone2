import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { getAll, updateItem, deleteItem } from '../modules/APICalls.js';
import firebase from "firebase";
import { JournalEntry } from "./JournalEntry.js"

export const JournalList = () => {

	const [journalArray, setJournalArray] = useState([])

	// const iGotIt = (item) => {
	// 	updateItem(item)
	// 		.then(() => {
	// 			getAllJournalEntries();
	// 		});

	// }

	const testDreams = [
		{
			"fbid": 1,
			"userid":  1,
			"typeId": 1, // nightmare or dream?
			"title": "My first dream",
			"text": "It was a good dream",
			"context": "I was born yesterday", // extra text area for real-world context before dream
			//hasAudio boolean
			"audioFileLink": "",
			"entryLastUpdatedDate": "",
			"dreamdate": "2 4 2021",
			"isRecurrent": false,
			"isLucid": true,
			"isFavorite": true
		},
		{
			"fbid": 2,
			"userid":  1,
			"typeId": 1, // nightmare or dream?
			"title": "My second dream",
			"text": "It was a good dream",
			"context": "I ran around the house until I got tired", // extra text area for real-world context before dream
			//hasAudio boolean
			"audioFileLink": "",
			"entryLastUpdatedDate": "",
			"dreamdate": "2 5 2021",
			"isRecurrent": false,
			"isLucid": false,
			"isFavorite": false
		},
		{
			"fbid": 3,
			"userid":  1,
			"typeId": 1, // nightmare or dream?
			"title": "My third dream",
			"text": "It was a good dream",
			"context": "I killed a bug yesterday", // extra text area for real-world context before dream
			//hasAudio boolean
			"audioFileLink": "",
			"entryLastUpdatedDate": "",
			"dreamdate": "2 7 2021",
			"isRecurrent": true,
			"isLucid": true,
			"isFavorite": false
		},
	]

	const deleteThisItem = (fbid) => {
		deleteItem(fbid)
			.then(status => {
				if (status === 200){
					getAllJournalEntries();
				}else {
					console.log("oops, error here")
				}
			})
	}

	const getAllJournalEntries = () => {
		getAll()
			.then(data => {
				// since our data is returned with a unique key, we need to add it to the object. 
				//use Object.keys
				//take a look at the data prior to map
				console.log("fb data", data);
				let arrayWithFBID = Object.keys(data).map((key, index) => {
					data[key].fbid = key;
					return data[key];
				});
				//now take a look after
				console.log("arrayWithFBID", arrayWithFBID);
				//and sort with most recent date first
				arrayWithFBID.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
				setJournalArray(arrayWithFBID)
			})
	}

	useEffect(() => {
		getAllJournalEntries()
	}, [])

	//cycle through the colors for each card
	const colorArray = ['Secondary', 'Success', 'Danger', 'Warning', 'Info']

	let colorCount = 0;

	const cyleBackgroundColor = () => {
		const variant = colorArray[colorCount];
		colorCount < colorArray.length - 1 ? colorCount++ : colorCount = 0;
		return variant.toLowerCase()
	}


	return (
		<>

			<Container fluid="xl">
				<h5 className="username">{firebase.auth().currentUser.displayName.split(" ")[0]}'s List</h5>
				<Col >
					{
						testDreams.map(item => { //journalArray.map
							//const mybgcolor = cyleBackgroundColor();

							return (
								<JournalEntry item={item} key={item.fbid} deleteThisItem={deleteThisItem} />


							)
						})

					}

				</Col>
			</Container>
		</>
	)
}