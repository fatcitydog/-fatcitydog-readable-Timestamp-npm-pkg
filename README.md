# Get a Readable, formatted and customized timestamp

If you want to quickly set up a customized timestamp format, this might be the easiest way.

## Install

```
$ npm install readable-timestamp-js

```

## Usage

```
ES6(preferred)

import { timeDifferenceForDate, readableTimestamp } from "readable-timestamp-js";

or

const { timeDifferenceForDate, readableTimestamp } = require("readable-timestamp-js")
```

### function timeDifferenceForDate()

timeDifferenceForDate accept 1 parameter, help users to calculate the difference between previous time and current time and return a human readable string.

```
const date = new Date();
console.log(timeDifferenceForDate(date))

//=> Just now

const previous = "Sun Jul 03 2022 00:37:36 GMT+0000"
console.log(timeDifferenceForDate(previous))

//=> 2 months ago
```

#### Readable patterns

- Just now
- Less than 1 min ago
- 1 min ago | mins ago
- 1 hour ago | hours ago
- 1 day ago | days ago
- 1 month ago | months ago
- 1 year ago | years ago

### function readableTimestamp()

readableTimestamp can accept 3 parameter and return a string to help users creating various date formats easily.

####1. The first parameter is the timestamp.

```
const date = new Date()
readableTimestamp(date)

//=> 02-07-2022 at 20:37
```

####2. The second parameter is a string to describe your format.

```
const date = new Date()
readableTimestamp(date, "at h:m")
//=> at 20:37
readableTimestamp(date, "h:m, M/D/Y")
//=> 20:37, 07/02/2022
readableTimestamp(date, "D/M, h:m ")
//=> 02/07, 20:37
```

#### Patterns roles

1. upperCase

- Y : return year
- M : return month
- D : return day

2. lowerCase

- h : return hour
- m : return minute
  ** case sensitive!!**

3. others
   It will return all the rests of your string including spaces and special characters.

4. Remeber the basic role, and you can write your pattern in any combination!

####3. The third parameter is a string to change your month to English.

```
const date = new Date()
readableTimestamp(date, "D M, Y at h:m", "month")
//=> 02 Jul, 2022 at 20:37

```

### Author

Yik

<div align="start" id="badges">
  <a href="https://www.linkedin.com/in/yik-tung-yeung/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://yik-portfolio.vercel.app/">
    <img src="https://img.shields.io/badge/-portfolio-white?style=for-the-badge&logo=Website&logoColor=black" alt="Portfolio"/>
  </a>
    <a href="https://github.com/fatcitydog">
    <img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=Website&logoColor=white" alt="GitHub"/>
  </a>
</div>
