var should = require('should'),
	TimeSpan = require('../');

describe('constructors', function() {
	it('should accept milliseconds', function() {
		var ts = new TimeSpan(1000);
		ts.should.have.ownProperty('totalMilliseconds', 1000);
	});

	it('should accept seconds, milliseconds', function() {
		var ts = new TimeSpan(5, 1000);
		ts.should.have.ownProperty('totalMilliseconds', 6000);
	});

	it('should accept minutes, seconds, milliseconds', function() {
		var ts = new TimeSpan(1, 5, 1000);
		ts.should.have.ownProperty('totalMilliseconds', 66000);
	});

	it('should accept hours, minutes, seconds, milliseconds', function() {
		var ts = new TimeSpan(1, 1, 5, 1000);
		ts.should.have.ownProperty('totalMilliseconds', 3666000);
	});

	it('should accept days, hours, minutes, seconds, milliseconds', function() {
		var ts = new TimeSpan(1, 1, 1, 5, 1000);
		ts.should.have.ownProperty('totalMilliseconds', 90066000);
	});
});