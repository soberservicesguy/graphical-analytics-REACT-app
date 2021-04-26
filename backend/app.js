const express = require('express');
var app = express();
const axios = require('axios')

const bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: false }))

baseUrl = 'http://35.247.187.62:3001'

const { Storage } = require("@google-cloud/storage");
const gc = new Storage({
	keyFilename: path.join(__dirname, "../android-app-backend-307507-4c7766a93018.json"),
	projectId: "android-app-backend-307507",
})


// DATABASES
	// in image database add
		// image_hosted_at EITHER CLOUD OR LOCAL
		// bucket_name
		// file_name
	// in video database add
		// video_hosted_at EITHER YOUTUBE OR LOCAL
		// youtube_link

// UPLOAD ROUTES
	// make routes dependant over .env file whether on gcp storage or local storage 

async function get_image_file_from_gcs(file_name, bucket_name){
	let bucket = gc.bucket(bucket_name)
	let image_file = bucket.file(file_name)
	return await image_file.createReadStream()
	.on('end', function(file_content){
		return file_content
	});
}

async function get_video_stream_from_youtube(file_name, bucket_name){
	// stream from youtube

	let bucket = gc.bucket(bucket_name)
	let video_file = bucket.file(file_name)
	await video_file.createReadStream()
	.on('data', function(chunk) {
		fileContents = Buffer.concat([fileContents, chunk]);
	})
	.on('end', function(file_content){
		return file_content
	});
}


async function upload_video_to_youtube(file_name, bucket_name){
	// upload on youtube

	let bucket = gc.bucket(bucket_name);
	let image_file = bucket.file(file_name)
	await image_file.upload()
}



// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.get('*', function(req, res){
app.get('/*', function(req, res){

	let request_path = req.originalUrl

	console.log({params:req.query})

	axios.get(baseUrl + request_path,
		{
			params:{
				...req.query
			}
		}
	)
	.then(function (response){

		res.json(response);

	})
	.catch(function (error) {
		// console.log(error);
	});	

});

// app.get('*', function(req, res){
app.post('/*', function(req, res){

	let request_path = req.originalUrl

	console.log({params:req.body})

	axios.post(baseUrl + request_path,
		{
			...req.body
			// phone_number:this.state.phone_number, 
			// password:this.state.password
		}
	)
	.then(function (response){

		res.json(response);

	})
	.catch(function (error) {
		// console.log(error);
	});	

});


module.exports = app;