# TimeSpan
**A CSharp-esque TimeSpan object for JavaScript**

Anyone who's used C# knows that it has some of the best native libraries on the planet - kudos to Microsoft. Of those, the ones I always find myself wishing for when writing JS code are C#'s TimeSpan and Date structures - so here's the TimeSpan object rewritten for JavaScript developers who want a lightweight, powerful and portable way to play with timespans.

## Example

```javascript
var TimeSpan = require('timespan.cs');
var ts = new TimeSpan(
	5 /*days*/, 
	2 /*hours*/, 
	12 /*minutes*/, 
	7 /*seconds*/, 
	0 /*milliseconds*/);

console.log('%s days', ts.toString('TD'));
// -> 5.091747685185185
```

## Creating a TimeSpan
TimeSpans are created one of two ways, either by calling the timespan constructor or by using `Date.subtract`. Using the constructor allows you to specify the number of *milliseconds*, *seconds*, *minutes*, *hours* and *days* (or a subset thereof) contained within the timespan.

```javascript
new TimeSpan(milliseconds);
new TimeSpan(seconds, milliseconds);
new TimeSpan(minutes, seconds, milliseconds);
new TimeSpan(hours, minutes, seconds, milliseconds);
new TimeSpan(days, hours, minutes, seconds, milliseconds);

Date.subtract(anotherDate);
Date.subtract(milliseconds);
Date.subtract(seconds, milliseconds);
Date.subtract(minutes, seconds, milliseconds);
Date.subtract(hours, minutes, seconds, milliseconds);
Date.subtract(days, hours, minutes, seconds, milliseconds);
```

## Using a TimeSpan
Each timespan makes a number of properties available for you to access, these are split into *totalXXX* and *XXX* properties. *Total* properties return the total number of [*milliseconds*, *seconds*, *minutes*, *hours*, *days*, *months*, *years*] that are contained within the TimeSpan. These values are *Real Numbers*, meaning that they have a decimal component representing partial values.

Similarly, the *XXX* properties represent the number of full [*milliseconds*, *seconds*, *minutes*, *hours*, *days*, *months*, *years*] within the TimeSpan should all other full values be used. Sounds complicated, it's not - a timespan with 25 hours in it will have *1 day* and *1 hour* with *0 minutes*, *0 seconds* and *0 milliseconds*.

```javascript
ts.totalMilliseconds;
ts.totalSeconds;
ts.totalMinutes;
ts.totalHours;
ts.totalMonths;
ts.totalYears;

ts.milliseconds;
ts.seconds;
ts.minutes;
ts.hours;
ts.months;
ts.years;
```

### Month and Year Components
It is important to understand that a TimeSpan represents a vector in time - it has magnitude (the amount of time within it) and direction (whether it's forwards or backwards in time) but has no point of origin. Because of the way the Gregorian calendar works (with its funky 28, 30 and 31 days in months and 365/366 days in a year) it is impossible to accurately determine the exact number of days that are contained within a TimeSpan - so what this library does is use the standard *30.4375* days in a month `(365 * 3 + 366) / 48` to determine the number of months and years that have passed within a specific TimeSpan. It is important to keep this in mind when working with months and years.

## Comparing TimeSpans
TimeSpans can be compared using `.equals()`, `.shorterThan()` and `.longerThan()`, allowing you to easily check how one timespan relates to another. Similarly to the way `Date.subtract` works, you can specify any subset of *days*, *hours*, *minutes*, *seconds* and *milliseconds* as arguments instead of a TimeStamp object.

```javascript
ts1.equals(ts2);
ts1.equals(milliseconds);
ts1.equals(seconds, milliseconds);
// And so on...

ts1.shorterThan(ts2);
ts1.shorterThan(milliseconds);
ts1.shorterThan(seconds, milliseconds);
// And so on...

ts1.longerThan(ts2);
ts1.longerThan(milliseconds);
ts1.longerThan(seconds, milliseconds);
// And so on...
```