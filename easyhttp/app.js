const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// Create Data
const data = {
	title: "Zedd's Post",
	body: "This is Zedd's custom post",
};

// Create Post
http.post(
	'https://jsonplaceholder.typicode.com/posts',
	data,
	function (err, post) {
		if (err) {
			console.log(err);
		} else {
			console.log(post);
		}
	}
);
