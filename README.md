<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isReadOnlyPropertyIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an object's own or inherited property is [read-only][@stdlib/utils/define-read-only-property].



<section class="usage">

## Usage

To use in Observable,

```javascript
isReadOnlyPropertyIn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-read-only-property-in@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-is-read-only-property-in/tags). For example,

```javascript
isReadOnlyPropertyIn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-read-only-property-in@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isReadOnlyPropertyIn = require( 'path/to/vendor/umd/assert-is-read-only-property-in/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-read-only-property-in@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isReadOnlyPropertyIn;
})();
</script>
```

#### isReadOnlyPropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a [read-only][@stdlib/utils/define-read-only-property] `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( Foo.prototype, 'accessor', {
    'configurable': false,
    'enumerable': true,
    'get': function getter() {
        return obj.foo;
    }
});

obj = new Foo();

bool = isReadOnlyPropertyIn( obj, 'foo' );
// returns false

bool = isReadOnlyPropertyIn( obj, 'beep' );
// returns true

bool = isReadOnlyPropertyIn( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isReadOnlyPropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils-define-property' );

    var obj = {};

    defineProperty( obj, 'null', {
        'configurable': false,
        'enumerable': true,
        'writable': false,
        'value': true
    });

    var bool = isReadOnlyPropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-read-only-property-in@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isReadOnlyPropertyIn( 'a', 'length' );
// returns true

bool = isReadOnlyPropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isReadOnlyPropertyIn( [ 'a' ], 0 );
// returns false

bool = isReadOnlyPropertyIn( { 'null': false }, null );
// returns false

bool = isReadOnlyPropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isReadOnlyPropertyIn( {}, 'toString' );
// returns false

bool = isReadOnlyPropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isReadOnlyPropertyIn( null, 'a' );
// returns false

bool = isReadOnlyPropertyIn( void 0, 'a' );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-read-only-property`][@stdlib/assert/is-read-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is read-only.</span>
-   <span class="package-name">[`@stdlib/assert-is-read-write-property-in`][@stdlib/assert/is-read-write-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own and inherited property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert-is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert-is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-read-only-property-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-read-only-property-in

[test-image]: https://github.com/stdlib-js/assert-is-read-only-property-in/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/assert-is-read-only-property-in/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-read-only-property-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-read-only-property-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-read-only-property-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-read-only-property-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-read-only-property-in/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-read-only-property-in/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-read-only-property-in/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-read-only-property-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-read-only-property-in/main/LICENSE

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils-define-read-only-property/tree/umd

<!-- <related-links> -->

[@stdlib/assert/is-read-only-property]: https://github.com/stdlib-js/assert-is-read-only-property/tree/umd

[@stdlib/assert/is-read-write-property-in]: https://github.com/stdlib-js/assert-is-read-write-property-in/tree/umd

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert-is-readable-property-in/tree/umd

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert-is-writable-property-in/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
