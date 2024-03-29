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

# iterSawtoothWave

> Create an iterator which generates a sawtooth wave.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A sawtooth waveform is represented by the following equation

<!-- <equation class="equation" label="eq:sawtooth_waveform" align="center" raw="f(t; \tau, a, \varphi) = \frac{2a}{\pi} \operatorname{arctan} \tan \frac{\pi(t-\varphi)}{\tau}" alt="Equation for a sawtooth waveform."> -->

```math
f(t; \tau, a, \varphi) = \frac{2a}{\pi} \mathop{\mathrm{arctan}} \tan \frac{\pi(t-\varphi)}{\tau}
```

<!-- <div class="equation" align="center" data-raw-text="f(t; \tau, a, \varphi) = \frac{2a}{\pi} \operatorname{arctan} \tan \frac{\pi(t-\varphi)}{\tau}" data-equation="eq:sawtooth_waveform">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5827c258000edcb03496265cdfd372d686b4c656/lib/node_modules/@stdlib/simulate/iter/sawtooth-wave/docs/img/equation_sawtooth_waveform.svg" alt="Equation for a sawtooth waveform.">
    <br>
</div> -->

<!-- </equation> -->

where `τ` is the period, `a` is the peak amplitude, and `φ` is the phase offset.

<!-- TODO: add a figure showing a sawtooth wave -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterSawtoothWave = require( '@stdlib/simulate/iter/sawtooth-wave' );
```

#### iterSawtoothWave( \[options] )

Returns an iterator which generates a sawtooth wave.

```javascript
var it = iterSawtoothWave();
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **period**: period (i.e., the number of iterations before a waveform repeats). Default: `10`.
-   **amplitude**: peak amplitude. Default: `1.0`.
-   **offset**: phase offset (in units of iterations; zero-based). A negative offset translates a waveform to the left. A positive offset translates a waveform to the right. Default: `0`.
-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an iterator which generates a sawtooth wave that repeats every `10` iterations. To specify an alternative period, set the `period` option.

```javascript
var opts = {
    'period': 4
};

var it = iterSawtoothWave( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns ~0.5

v = it.next().value;
// returns ~1.0

v = it.next().value;
// returns ~-0.5

v = it.next().value;
// returns 0.0

// ...
```

To adjust at what point the iterator begins in the waveform cycle, set the phase `offset` option. For example, to translate the waveform to the left,

```javascript
var opts = {
    'period': 4,
    'offset': -1
};

var it = iterSawtoothWave( opts );
// returns <Object>

var v = it.next().value;
// returns ~0.5

v = it.next().value;
// returns ~1.0

v = it.next().value;
// returns ~-0.5

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns ~0.5

// ...
```

To translate the waveform to the right,

```javascript
var opts = {
    'period': 4,
    'offset': 1
};

var it = iterSawtoothWave( opts );
// returns <Object>

var v = it.next().value;
// returns ~-0.5

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns ~0.5

v = it.next().value;
// returns ~1.0

v = it.next().value;
// returns ~-0.5

// ...
```

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterSawtoothWave( opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterSawtoothWave = require( '@stdlib/simulate/iter/sawtooth-wave' );

// Create an iterator:
var opts = {
    'period': 10,
    'amplitude': 10.0,
    'offset': -5,
    'iter': 100
};
var it = iterSawtoothWave( opts );

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

-   <span class="package-name">[`@stdlib/simulate/iter/pulse`][@stdlib/simulate/iter/pulse]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a pulse waveform.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/sine-wave`][@stdlib/simulate/iter/sine-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sine wave.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/square-wave`][@stdlib/simulate/iter/square-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a square wave.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/triangle-wave`][@stdlib/simulate/iter/triangle-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a triangle wave.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/simulate/iter/pulse]: https://github.com/stdlib-js/simulate/tree/main/iter/pulse

[@stdlib/simulate/iter/sine-wave]: https://github.com/stdlib-js/simulate/tree/main/iter/sine-wave

[@stdlib/simulate/iter/square-wave]: https://github.com/stdlib-js/simulate/tree/main/iter/square-wave

[@stdlib/simulate/iter/triangle-wave]: https://github.com/stdlib-js/simulate/tree/main/iter/triangle-wave

<!-- </related-links> -->

</section>

<!-- /.links -->
