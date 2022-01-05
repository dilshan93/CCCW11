'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');

exports.modelSearchService = async (event) => {
	return getCarModel(event);
}

function getCarModel(event) {
	const modelName = event.pathParameters.modelName;
	return databaseManager.getAllCarModels().then(response => {
		let item = null;
		response.Items.forEach(element => {
			if(element.name.toLowerCase() === modelName.toLowerCase()){
				item = element;
			}
		});
		return sendResponse(200, JSON.stringify(item));
	});
}  

function sendResponse(statusCode, message) {
	const response = {
		statusCode: statusCode,
    body: JSON.stringify(message),
    headers: {}
	};
	return response
}
