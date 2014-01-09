module.exports = exports = TimeSpan;

function TimeSpan() {
	/// <signature>
	/// <summary>Creates a new TimeSpan object representing the specified time interval</summary>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Creates a new TimeSpan object representing the specified time interval</summary>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Creates a new TimeSpan object representing the specified time interval</summary>
	/// <param name="minutes" type="Number">The number of minutes within the TimeSpan object</param>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Creates a new TimeSpan object representing the specified time interval</summary>
	/// <param name="hours" type="Number">The number of hours within the TimeSpan object</param>
	/// <param name="minutes" type="Number">The number of minutes within the TimeSpan object</param>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Creates a new TimeSpan object representing the specified time interval</summary>
	/// <param name="days" type="Number">The number of days within the TimeSpan object</param>
	/// <param name="hours" type="Number">The number of hours within the TimeSpan object</param>
	/// <param name="minutes" type="Number">The number of minutes within the TimeSpan object</param>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>

	var totalMilliseconds = getMilliseconds.apply(null, arguments);

	if(!(this instanceof TimeSpan)) return new TimeSpan(totalMilliseconds);

	this.totalMilliseconds = totalMilliseconds;
}

var paramMultipliers = [1, 1000, 60000, 3600000, 86400000];
function getMilliseconds() {
	var totalMilliseconds = 0;
	var args = Array.prototype.slice.call(arguments, 0).reverse();

	for(var i = 0; i < args.length; i++)
		totalMilliseconds += args[i] * paramMultipliers[i];

	return totalMilliseconds;
}

function padZeros(number, length) {
	var result = number.toString();
	while(result.length < length)
		result = '0' + result;
	return result;
}

TimeSpan.prototype = {
	get totalSeconds() {
		/// <summary>Gets the total number of seconds within this TimeSpan</summary>
		/// <return type="Number"/>
		return this.totalMilliseconds / 1000;
	},
	get totalMinutes() {
		/// <summary>Gets the total number of minutes within this TimeSpan</summary>
		/// <return type="Number"/>
		return this.totalMilliseconds / 60000;
	},
	get totalHours() {
		/// <summary>Gets the total number of hours within this TimeSpan</summary>
		/// <return type="Number"/>
		return this.totalMilliseconds / 3600000;
	},
	get totalDays() {
		/// <summary>Gets the total number of days within this TimeSpan</summary>
		/// <return type="Number"/>
		return this.totalMilliseconds / 86400000;
	},
	get totalMonths() {
		/// <summary>Gets the total number of minutes within this TimeSpan</summary>
		/// <return type="Number"/>
		return this.totalMilliseconds / (86400000 * 30.4375);
	},
	get totalYears() {
		/// <summary>Gets the total number of minutes within this TimeSpan</summary>
		/// <return type="Number"/>
		return this.totalMilliseconds / (86400000 * 30.4375 * 12);
	},

	get milliseconds() {
		/// <summary>Gets the milliseconds component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalMilliseconds % 1000);
	},
	get seconds() {
		/// <summary>Gets the second component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalSeconds % 60);
	},
	get minutes() {
		/// <summary>Gets the minutes component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalMinutes % 60);
	},
	get hours() {
		/// <summary>Gets the hours component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalHours % 12);
	},
	get days() {
		/// <summary>Gets the days component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalDays % 30.4375);
	},
	get months() {
		/// <summary>Gets the months component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalMonths % 12);
	},
	get years() {
		/// <summary>Gets the days component of this TimeSpan</summary>
		/// <return type="Number"/>
		return Math.floor(this.totalYears);
	}
};

TimeSpan.prototype.toString = function(format) {
	/// <signature>
	/// <summary>Gets a string representation of this timespan object</summary>
	/// </signature>
	/// <signature>
	/// <summary>Gets a string representation of this timespan object</summary>
	/// <param name="format" type="String">A string format used to describe the output format</param>
	/// </signature>

	var replaceMap = {
		'yyyy': 'years',
		'MM': 'months',
		'dd': 'days',
		'HH': 'hours',
		'mm': 'minutes',
		'ss': 'seconds',
		'xxxx': 'milliseconds',

		'ttyy': 'totalYears',
		'TM': 'totalMonths',
		'td': 'totalDays',
		'TH': 'totalHours',
		'tm': 'totalMinutes',
		'ts': 'totalSeconds',
		'ttxx': 'totalMilliseconds'
	};
	
	format = format || 'yyyy years, MM months, dd days HH:mm:ss.xxxx';
	return format.replace(/yyyy|MM|dd|HH|mm|ss|xxxx|ttyy|TM|td|TH|tm|ts|ttxx/g, (function(match) {
		return padZeros(this[replaceMap[match]], match.length);
	}).bind(this));
};

TimeSpan.prototype.add = function() {
	/// <signature>
	/// <summary>Gets the TimeSpan of two merged time intervals</summary>
	/// <param name="timespan" type="TimeSpan">The TimeSpan to add to the current TimeSpan</param>
	/// </signature>	
	/// <signature>
	/// <summary>Gets the TimeSpan of two merged time intervals</summary>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Gets the TimeSpan of two merged time intervals</summary>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Gets the TimeSpan of two merged time intervals</summary>
	/// <param name="minutes" type="Number">The number of minutes within the TimeSpan object</param>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Gets the TimeSpan of two merged time intervals</summary>
	/// <param name="hours" type="Number">The number of hours within the TimeSpan object</param>
	/// <param name="minutes" type="Number">The number of minutes within the TimeSpan object</param>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>
	/// <signature>
	/// <summary>Gets the TimeSpan of two merged time intervals</summary>
	/// <param name="days" type="Number">The number of days within the TimeSpan object</param>
	/// <param name="hours" type="Number">The number of hours within the TimeSpan object</param>
	/// <param name="minutes" type="Number">The number of minutes within the TimeSpan object</param>
	/// <param name="seconds" type="Number">The number of seconds within the TimeSpan object</param>
	/// <param name="milliseconds" type="Number">The number of milliseconds within the TimeSpan object</param>
	/// </signature>

	if(arguments.length === 0) return this;

	if(arguments[0] instanceof TimeSpan) {
		this.totalMilliseconds += arguments[0].totalMilliseconds;
		return this;
	}
	
	this.totalMilliseconds += getMilliseconds.apply(null, arguments);
	return this;
};

TimeSpan.prototype.equals = function() {
	/// <summary>Checks whether this TimeStamp is equal to another</summary>
	/// <return type="Boolean"/>

	if(arguments.length === 0) return false;
	if(arguments[0] instanceof TimeSpan) return this.totalMilliseconds === arguments[0].totalMilliseconds;

	var ts = getMilliseconds.apply(null, arguments);
	return this.totalMilliseconds === ts;
};

TimeSpan.prototype.shorterThan = function() {
	/// <summary>Checks whether this TimeStamp is shorter than another</summary>
	/// <return type="Boolean"/>

	if(arguments.length === 0) return false;
	if(arguments[0] instanceof TimeSpan) return this.totalMilliseconds < arguments[0].totalMilliseconds;

	var ts = getMilliseconds.apply(null, arguments);
	return this.totalMilliseconds < ts;
};

TimeSpan.prototype.longerThan = function() {
	/// <summary>Checks whether this TimeStamp is longer than another</summary>
	/// <return type="Boolean"/>

	if(arguments.length === 0) return false;
	if(arguments[0] instanceof TimeSpan) return this.totalMilliseconds > arguments[0].totalMilliseconds;

	var ts = getMilliseconds.apply(null, arguments);
	return this.totalMilliseconds > ts;
};

Date.prototype.subtract = function() {
	/// <signature>
	/// <summary>Determines the time difference between two date objects</summary>
	/// <param name="date" type="Date">The date object to subtract from this date</param>
	/// <return type="TimeSpan"/>
	/// </signature>
	/// <signature>
	/// <summary>Determines the time difference between two dates</summary>
	/// <param name="milliseconds" type="Number">The UTC timestamp representing the number of milliseconds since epoc</param>
	/// <return type="TimeSpan"/>
	/// </signature>

	if(arguments.length === 0) return new TimeSpan(this.getTime());

	if(arguments[0] instanceof Date)
		return new TimeSpan(this.getTime() - arguments[0].getTime());
	else {
		var ts = getMilliseconds.apply(null, arguments);
		return new TimeSpan(this.getTime() - ts);
	}
};