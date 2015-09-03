'use strict';

//     logger.js
//     https://github.com/syncode/Bee-Logger-npm
//     (c) 2015 Syncode Software Ltd.
//     Bee Logger - Node Module Adapter may be freely distributed under the MIT license.

var http = require('http');

var config = {
	api: {
		host: 'localhost',
		port: '3000',
		path: '/log'
	}
}

var Logger = function() {

	var data = {
		key: '',
		secret: ''
	}

	// Build the post string from an object
	var post_data = JSON.stringify({
		secret: data.secret,
		no: 1,
		message: 'test message'
	});

	// An object of options to indicate where to post to
	var post_options = {
		host: config.api.host,
		port: config.api.port,
		path: config.api.path + '/' + data.key,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': post_data.length
		}
	};

	// Set up the request
	var post_req = http.request(post_options);

	// post the data
	post_req.write(post_data);
	post_req.end();

};

module.exports = Logger;
