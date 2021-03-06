<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# iterawln

> Create an [iterator][mdn-iterator-protocol] which introduces additive white Laplacian noise (AWLN).

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterawln = require( '@stdlib/simulate/iter/awln' );
```

#### iterawln( iterator, sigma\[, options] )

Returns an [iterator][mdn-iterator-protocol] which introduces additive white Laplacian (a.k.a. biexponential or double-exponential) noise (AWLN) with standard deviation `sigma`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var it = iterawln( arr, 0.2 );

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.
-   **PRNG**: underlying pseudorandom number generator (PRNG).
-   **seed**: pseudorandom number generator seed. If provided a PRNG, the property value is `null`.
-   **seedLength**: length of generator seed. If provided a PRNG, the property value is `null`.
-   **state**: pseudorandom number generator state. If provided a PRNG, the property value is `null`.
-   **stateLength**: length of generator state. If provided a PRNG, the property value is `null`.
-   **byteLength**: size (in bytes) of generator state. If provided a PRNG, the property value is `null`.

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned iterator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned iterator has exclusive control over its internal state. Default: `true`.

By default, an iterator uses the [MT19937][@stdlib/random/base/mt19937] algorithm to generate uniformly distributed pseudorandom numbers on the interval `[0,1)`. To use a different PRNG, set the `prng` option.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' );

var arr = array2iterator( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var it = iterawln( arr, 0.2, {
    'prng': minstd.normalized
});

var v = it.next().value;
// returns <number>
```

To seed an iterator, set the `seed` option.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var it1 = iterawln( arr, 0.2, {
    'seed': 12345
});

var v1 = it1.next().value;
// returns <number>

var it2 = iterawln( arr, 0.2, {
    'seed': 12345
});

var v2 = it2.next().value;
// returns <number>

var bool = ( v1 === v2 );
// returns true
```

To return an iterator having a specific initial state, set the iterator `state` option.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var arr = array2iterator( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var it1 = iterawln( arr, 0.2 );

// Progress the underlying generator state:
var i;
for ( i = 0; i < 3; i++ ) {
    it1.next();
}

// Create a new iterator initialized to the current state of `it1`:
var it2 = iterawln( arr, 0.2, {
    'state': it1.state
});

// Test that the iterator values are the same:
var bool = ( it1.next().value === it2.next().value );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during iterator creation and **not** copied) and one sets the iterator state to a state array having a different length, the iterator does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize generated output according to the new shared state array, the state array for **each** relevant PRNG/iterator must be **explicitly** set.
-   If PRNG state is "shared" and one sets the iterator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs/iterators sharing the state array).
-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterSineWave = require( '@stdlib/simulate/iter/sine-wave' );
var iterawln = require( '@stdlib/simulate/iter/awln' );

// Create an iterator for generating a sine wave:
var sine = iterSineWave({
    'iter': 100,
    'amplitude': 10.0
});

// Create an iterator for introducing additive white Laplacian noise:
var it = iterawln( sine, 3.0 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/simulate/iter/awgn`][@stdlib/simulate/iter/awgn]</span><span class="delimiter">: </span><span class="description">create an iterator which introduces additive white Gaussian noise.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/awun`][@stdlib/simulate/iter/awun]</span><span class="delimiter">: </span><span class="description">create an iterator which introduces additive white uniform noise.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937

<!-- <related-links> -->

[@stdlib/simulate/iter/awgn]: https://github.com/stdlib-js/simulate/tree/main/iter/awgn

[@stdlib/simulate/iter/awun]: https://github.com/stdlib-js/simulate/tree/main/iter/awun

<!-- </related-links> -->

</section>

<!-- /.links -->
