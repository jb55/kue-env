
# kue-env

  Simple wrapper around kue.createQueue that initializes redis settings
  from the environment

## Installation

  Install with npm

    $ npm install kue-env

## Example

```js
var kue = require('kue')
var jobs = require('kue-env')(kue)
```

## Implementation

```js
var env = process.env

module.exports = function (kue) {
  var settings = {
    prefix: env.KUE_PREFIX,
    redis: {
      port: env.KUE_REDIS_PORT,
      host: env.KUE_REDIS_HOST,
      auth: env.KUE_REDIS_AUTH,
      db: env.KUE_DB
    }
  }

  return kue.createQueue(settings)
}
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
