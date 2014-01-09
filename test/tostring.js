var should = require('should'),
	TimeSpan = require('../');

describe('toString', function() {
	var ts = new TimeSpan(397,1,1,1,1);

	it('should correctly output the default format', function() {
		ts.toString().should.eql('0001 years, 01 months, 01 days 01:01:01.0001');
	});

	it('should correctly handle custom formats');
});