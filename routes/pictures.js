var pictures = require('../pictures.json');

exports.picture = function(req, res) {
	res.json(pictures);
}

exports.post = function(req, res, data){
	//console.log(res);
	console.log(req.body);
	//pictures.push(res);

}