
const options = {
	definition:{
		openapi:'3.0.1',
		info:{
			title:'Node js api Simple Todo',
			version:'1.0.0'
		},
		servers:[
			{
				url:'http://localhost:5000/'
			}
		],
		
	},
	apis:['./routes']
}

module.exports = {
	options
}