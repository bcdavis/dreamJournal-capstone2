/*
Using Firebase as a JSON API with fetch calls
*/

import firebase from "firebase/app";
import { firebaseConfig } from "../fbAuth/firebaseConfig.js";

console.log("fb",firebase);
const dataURL = firebaseConfig.databaseURL;

//https://firebase.google.com/docs/reference/rest/database

export const getAll = () => {
	//in the rules section of your Firebase Database, be sure to include 'indexOn` for the properties you will need for selection
	// for example: only return items with a specific uid
	/* 
		"JournalList": {
			".indexOn": ["uid"]
		}
	*/
	
	// https://firebase.google.com/docs/database/rest/retrieve-data?authuser=0
	// combine orderBy with any of the other five parameters: limitToFirst, limitToLast, startAt, endAt, and equalTo
	return fetch(`${dataURL}/JournalList.json/?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
	.then(response => response.json())
	
}

export const getOneItem = (fbid) => {
	console.log("getone", fbid);
	return fetch(`${dataURL}/JournalList/${fbid}.json`)
	.then(response => response.json())
}

export const addItem = (itemObj) => {
	return fetch(`${dataURL}/JournalList.json`,{
		method:"POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	}).then(response => response.json())
}

export const updateItem = (itemObj) => {
	//we don't want to add the firebase key to the item object on firebase(duplication of data) so, 
	//make a reference to the fbid and then remove it from the object
	const fbid = itemObj.fbid;
	delete itemObj.fbid;

	return fetch(`${dataURL}/JournalList/${fbid}.json`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	})	
}

export const updateJournalList = (itemObj) => {

	//we don't want to add the firebase key to the item object on firebase(duplication of data) so, 
	//make a reference to the fbid and then remove it from the object
	const fbid = itemObj.fbid;
	delete itemObj.fbid;

	return fetch(`${dataURL}/JournalList/${fbid}.json`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	})	
}

export const deleteItem = (itemFBID) => {
	return fetch(`${dataURL}/JournalList/${itemFBID}.json`,{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
	}).then(response => {
		//should return 200 OK HTTP status code
		return response.status
	})
}