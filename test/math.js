var should = require('should'),
	TimeSpan = require('../');

describe('mathematical', function() {
	describe('addition', function() {
		it('should correctly add two TimeSpans', function() {
			var ts1 = new TimeSpan(10);
			var ts2 = new TimeSpan(11);
			var ts3 = ts1.add(ts2);
			ts1.should.have.ownProperty('totalMilliseconds', 21);
			ts3.should.have.ownProperty('totalMilliseconds', 21);
		});

		it('should correctly add milliseconds', function() {
			var ts1 = new TimeSpan(10);
			var ts3 = ts1.add(11);
			ts1.should.have.ownProperty('totalMilliseconds', 21);
			ts3.should.have.ownProperty('totalMilliseconds', 21);
		});

		it('should correctly add seconds, milliseconds', function() {
			var ts1 = new TimeSpan(10);
			var ts3 = ts1.add(1, 11);
			ts1.should.have.ownProperty('totalMilliseconds', 1021);
			ts3.should.have.ownProperty('totalMilliseconds', 1021);
		});
	});

	describe('comparison', function() {
		it('should correctly determine whether two TimeSpans are equal', function() {
			var ts1 = new TimeSpan(10);
			var ts2 = new TimeSpan(11);
			var ts3 = new TimeSpan(10);

			ts1.equals(ts2).should.be.false;
			ts1.equals(ts3).should.be.true;
			ts1.equals(10).should.be.true;
			ts1.equals(11).should.be.false;
		});

		it('should correctly determine whether a timespan is shorter than another');
		it('should correctly determine whether a timespan is longer than another');
	});
});