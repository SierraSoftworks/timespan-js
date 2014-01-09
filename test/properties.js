var should = require('should'),
	TimeSpan = require('../');

describe('properties', function() {
	var ts = new TimeSpan(1, 1, 1, 1, 1);

	it('should provide the correct total number of milliseconds', function() {
		ts.should.have.ownProperty('totalMilliseconds').and.eql(86400000 + 3600000 + 60000 + 1000 + 1);
	});

	it('should provide the correct total number of seconds', function() {
		ts.should.have.property('totalSeconds').and.eql((86400000 + 3600000 + 60000 + 1000 + 1) / 1000);
	});

	it('should provide the correct total number of minutes', function() {
		ts.should.have.property('totalMinutes').and.eql((86400000 + 3600000 + 60000 + 1000 + 1) / (60 * 1000));
	});

	it('should provide the correct total number of hours');

	it('should provide the correct total number of days');

	it('should provide the correct total number of months');

	it('should provide the correct total number of years');

	it('should provide the correct number of milliseconds', function() {
		ts.should.have.property('milliseconds').and.eql(1);
	});

	it('should provide the correct number of seconds', function() {
		ts.should.have.property('seconds').and.eql(1);
	});

	it('should provide the correct number of hours', function() {
		ts.should.have.property('hours').and.eql(1);
	});

	it('should provide the correct number of days', function() {
		ts.should.have.property('days').and.eql(1);
	});

	it('should provide the correct number of months', function() {
		ts.should.have.property('months').and.eql(0);
	});

	it('should provide the correct number of years', function() {
		ts.should.have.property('years').and.eql(0);
	});
});