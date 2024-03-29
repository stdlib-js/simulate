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

# iterBartlettHannPulse

> Create an iterator which generates a Bartlett-Hann pulse waveform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A Bartlett-Hann pulse waveform is represented by the following equation

<!-- <equation class="equation" label="eq:bartlett_hann_pulse_waveform" align="center" raw="f(t; T, \tau, A, \varphi) = \begin{cases}A \biggl(0.62 - 0.48\biggl|\frac{t-\varphi}{\tau-1} - \frac{1}{2}\biggr| - 0.38\cos\frac{2\pi (t-\varphi)}{\tau-1}\biggr) & (t-\varphi) \mod T < \tau \\ 0 & \textrm{otherwise} \end{cases}" alt="Equation for a Bartlett-Hann pulse waveform."> -->

```math
f(t; T, \tau, A, \varphi) = \begin{cases}A \biggl(0.62 - 0.48\biggl|\frac{t-\varphi}{\tau-1} - \frac{1}{2}\biggr| - 0.38\cos\frac{2\pi (t-\varphi)}{\tau-1}\biggr) & (t-\varphi) \mod T < \tau \\ 0 & \textrm{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(t; T, \tau, A, \varphi) = \begin{cases}A \biggl(0.62 - 0.48\biggl|\frac{t-\varphi}{\tau-1} - \frac{1}{2}\biggr| - 0.38\cos\frac{2\pi (t-\varphi)}{\tau-1}\biggr) &amp; (t-\varphi) \mod T < \tau \\ 0 &amp; \textrm{otherwise} \end{cases}" data-equation="eq:bartlett_hann_pulse_waveform">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@76fd234ed3f3558f7a75e86bce3ad928b5fb7e3a/lib/node_modules/@stdlib/simulate/iter/bartlett-hann-pulse/docs/img/equation_bartlett_hann_pulse_waveform.svg" alt="Equation for a Bartlett-Hann pulse waveform.">
    <br>
</div> -->

<!-- </equation> -->

where `T` is the pulse period, `τ` is the pulse duration, `A` is the amplitude, and `φ` is the phase offset.

<!-- TODO: add a figure showing a Bartlett-Hann pulse train -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterBartlettHannPulse = require( '@stdlib/simulate/iter/bartlett-hann-pulse' );
```

#### iterBartlettHannPulse( \[options] )

Returns an iterator which generates a Bartlett-Hann pulse waveform.

```javascript
var it = iterBartlettHannPulse();
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

-   **period**: pulse period (i.e., the number of iterations before a waveform repeats). Default: `100`.
-   **duration**: pulse duration. Must be greater than `2`. Default: `options.period`.
-   **amplitude**: amplitude. Default: `1.0`.
-   **offset**: phase offset (in units of iterations; zero-based). A negative offset translates a waveform to the left. A positive offset translates a waveform to the right. Default: `0`.
-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an iterator which generates a waveform that repeats every `100` iterations. To specify an alternative period, set the `period` option.

```javascript
var opts = {
    'period': 10
};

var it = iterBartlettHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

By default, the function returns an iterator which generates a waveform that has a duty cycle of `100%` (i.e., the waveform duration equals the waveform period). To specify an alternative duty cycle, set the `duration` option. For example, to generate a waveform having a period of `10` iterations and a `50%` duty cycle,

```javascript
var opts = {
    'period': 10,
    'duration': 5 // 5/10 = 0.50 => 50%
};

var it = iterBartlettHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

// ...
```

To adjust at what point the iterator begins in the waveform cycle, set the phase `offset` option. For example, to translate the waveform to the left,

```javascript
var opts = {
    'period': 10,
    'duration': 5,
    'offset': -7
};

var it = iterBartlettHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

To translate the waveform to the right,

```javascript
var opts = {
    'period': 10,
    'duration': 5,
    'offset': 2
};

var it = iterBartlettHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterBartlettHannPulse( opts );
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
var iterBartlettHannPulse = require( '@stdlib/simulate/iter/bartlett-hann-pulse' );

// Create an iterator:
var opts = {
    'period': 50,
    'duration': 25,
    'amplitude': 10.0,
    'offset': -25,
    'iter': 100
};
var it = iterBartlettHannPulse( opts );

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

-   <span class="package-name">[`@stdlib/simulate/iter/bartlett-pulse`][@stdlib/simulate/iter/bartlett-pulse]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Bartlett pulse waveform.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/hann-pulse`][@stdlib/simulate/iter/hann-pulse]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Hann pulse waveform.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/pulse`][@stdlib/simulate/iter/pulse]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a pulse waveform.</span>
-   <span class="package-name">[`@stdlib/simulate/iter/triangle-wave`][@stdlib/simulate/iter/triangle-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a triangle wave.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/simulate/iter/bartlett-pulse]: https://github.com/stdlib-js/simulate/tree/main/iter/bartlett-pulse

[@stdlib/simulate/iter/hann-pulse]: https://github.com/stdlib-js/simulate/tree/main/iter/hann-pulse

[@stdlib/simulate/iter/pulse]: https://github.com/stdlib-js/simulate/tree/main/iter/pulse

[@stdlib/simulate/iter/triangle-wave]: https://github.com/stdlib-js/simulate/tree/main/iter/triangle-wave

<!-- </related-links> -->

</section>

<!-- /.links -->
