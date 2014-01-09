var should = require('should'),
	TimeSpan = require('../');

describe('Date subtract', function() {
	it('should correctly determine the difference between two dates', function() {
		var date1 = new Date();
		var date2 = new Date();
		date2.setUTCFullYear(1970);

		date1.should.have.property('subtract');

		var ts = date1.subtract(date2);
		should.exist(ts);
		ts.should.have.ownProperty('totalMilliseconds', date1.getTime() - date2.getTime());
	});

	it('should correctly determine the difference between a date and a UNIX timestamp', function() {
		var date1 = new Date();
		var ts = date1.subtract(10000);
		should.exist(ts);
		ts.should.have.ownProperty('totalMilliseconds', date1.getTime() - 10000);
	});

	it('should correctly handle days, hours, minutes, seconds, milliseconds');
});