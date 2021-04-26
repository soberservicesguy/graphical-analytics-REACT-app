const http = require('http');
const app = require('./app');


// const fs = require('fs')
// let all_links = [
// 	'./assets/images/uploads/advertisement_images',
// 	'./assets/images/uploads/avatar_image',
// 	'./assets/images/uploads/books_images',
// 	'./assets/images/uploads/cover_image',
// 	'./assets/images/uploads/page_images',
// 	'./assets/images/uploads/social_post_images',
// 	'./assets/images/uploads/sport_image',

// 	'./assets/videos/uploads/social_post_videos',
// 	'./assets/videos/uploads/thumbnails_for_social_videos',
// ]

// let all_folders = Promise.all(all_links.map(async (dirpath) => {

// 	try {

// 		await fs.promises.mkdir(dirpath, { recursive: true })
// 		console.log(`created ${dirpath}`)

// 	} catch (err){

// 		console.log(`was already created probably${dirpath}`)
// 		console.log(err)

// 	}

// }))


const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port);