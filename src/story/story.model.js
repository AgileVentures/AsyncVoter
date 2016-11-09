var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: 'string',
	size: 'string',
	url: 'string'
},
{
    timestamps: true
});

schema.statics.findBy = function(filter, callback) {
	let filterObject = {};
	for(let key in filter) {
			if(key === 'state' && filter[key] === 'active') {
				filterObject['size'] = 0;
			} else {
				filterObject[key] = filter[key];
			}
	}
	return this.model('Story').find(filterObject).sort('name').exec(callback);
}


var Story = mongoose.model('Story', schema);



module.exports = Story;