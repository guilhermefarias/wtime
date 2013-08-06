#! /usr/bin/env node

/*
 * wtime
 * https://github.com/guilhermefarias/wtime
 *
 * Copyright (c) 2013 Guilherme Farias
 * Licensed under the MIT license.
 */

'use strict';

function parseNumber(number){
	if(number < 10){
		number = '0' + number;
	}
	return number;
}

var date = new Date(),
	day = date.getDate(),
	month = date.getMonth()+1,
	year = date.getFullYear(),
	hour = date.getHours(),
	minutes = date.getMinutes(),
	seconds = date.getSeconds();

day = parseNumber(day);
month = parseNumber(month);
hour = parseNumber(hour);
minutes = parseNumber(minutes);
seconds = parseNumber(seconds);

var localtime = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;

console.log('Here is your local time: ' + localtime);
