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

# iterLanczosPulse

> Create an iterator which generates a Lanczos pulse waveform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A Lanczos pulse waveform is represented by the following equation

<!-- <equation class="equation" label="eq:lanczos_pulse_waveform" align="center" raw="f(t; T, \tau, a, \varphi) = \begin{cases}\operatorname{sinc}\biggl( \frac{2(t-\varphi)}{\tau-1} - 1\biggr) & (t-\varphi) \mod T < \tau \\ 0 & \textrm{otherwise} \end{cases}" alt="Equation for a Lanczos pulse waveform."> -->

```math
f(t; T, \tau, a, \varphi) = \begin{cases}\mathop{\mathrm{sinc}}\biggl( \frac{2(t-\varphi)}{\tau-1} - 1\biggr) & (t-\varphi) \mod T < \tau \\ 0 & \textrm{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(t; T, \tau, a, \varphi) = \begin{cases}\operatorname{sinc}\biggl( \frac{2(t-\varphi)}{\tau-1} - 1\biggr) &amp; (t-\varphi) \mod T < \tau \\ 0 &amp; \textrm{otherwise} \end{cases}" data-equation="eq:lanczos_pulse_waveform">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@4fa8f0c0d831199775879b44805649a741cf37ce/lib/node_modules/@stdlib/simulate/iter/lanczos-pulse/docs/img/equation_lanczos_pulse_waveform.svg" alt="Equation for a Lanczos pulse waveform.">
    <br>
</div> -->

<!-- </equation> -->

where `T` is the pulse period, `τ` is the pulse duration, `a` is the amplitude, and `φ` is the phase offset.

<!-- TODO: add a figure showing a Lanczos pulse train -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterLanczosPulse = require( '@stdlib/simulate/iter/lanczos-pulse' );
```

#### iterLanczosPulse( \[options] )

Returns an iterator which generates a Lanczos pulse waveform.

```javascript
var it = iterLanczosPulse();
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

var it = iterLanczosPulse( opts );
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

var it = iterLanczosPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

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

var it = iterLanczosPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

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

var it = iterLanczosPulse( opts );
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

// ...
```

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterLanczosPulse( opts );
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
var iterLanczosPulse = require( '@stdlib/simulate/iter/lanczos-pulse' );

// Create an iterator:
var opts = {
    'period': 50,
    'duration': 25,
    'amplitude': 10.0,
    'offset': -25,
    'iter': 100
};
var it = iterLanczosPulse( opts );

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
-   <span class="package-name">[`@stdlib/simulate/iter/periodic-sinc`][@stdlib/simulate/iter/periodic-sinc]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a periodic sinc waveform.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/simulate/iter/pulse]: https://github.com/stdlib-js/simulate/tree/main/iter/pulse

[@stdlib/simulate/iter/periodic-sinc]: https://github.com/stdlib-js/simulate/tree/main/iter/periodic-sinc

<!-- </related-links> -->

</section>

<!-- /.links -->
