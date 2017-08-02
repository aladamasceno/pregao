var Cadastros = require('../models/Cadastro');

module.exports = {
	read: (req, res) => {
				Cadastros.find({}, (err, data) => {
					if(!err){
						res.json(data);
					}
				})
			},

	readId: (req, res) => {
				Cadastros.findById(req.params.id, (err, data) => {
					if (!err){
						res.json(data);
					}
				})
			},

	create: (req, res) => {
				console.log(req.body);
				var reg = new Cadastros(req.body)
				reg.save((err, doc)=>{
					if(err){
						res.json(err);
					}
					else{
						res.json(doc)
					}
				})
			},

	update: (req, res) => {
				var doc = req.body;
				console.log(doc);
				Cadastros.findByIdAndUpdate(req.params.id, doc, (err, data) => {
					if(err){
						res.status(500).send(err);
					};
					res.json(data);
				});

		},

	delete: (req, res) => {
				Cadastros.findByIdAndRemove(req.params.id, (err, reg) => {

					var response = {
						message: "Doc successfully deleted",
						id: reg._id
		    		};
		    		res.send(response);
				})
			},

}