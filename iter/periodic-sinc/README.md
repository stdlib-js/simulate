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

# iterPeriodicSinc

> Create an iterator which generates a periodic [sinc][@stdlib/math/base/special/sinc] waveform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The periodic [sinc][@stdlib/math/base/special/sinc] function, also known as the Dirichlet function, is defined as

<!-- <equation class="equation" label="eq:periodic_sinc" align="center" raw="D_N(x; A) = \begin{cases}\frac{A\sin(Nx/2)} {N\sin(x/2)} & x \neq 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & x = 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" alt="Periodic sinc function."> -->

```math
D_N(x; A) = \begin{cases}\frac{A\sin(Nx/2)} {N\sin(x/2)} & x \neq 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & x = 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="D_N(x; A) = \begin{cases}\frac{A\sin(Nx/2)} {N\sin(x/2)} &amp; x \neq 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} &amp; x = 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" data-equation="eq:periodic_sinc">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc.svg" alt="Periodic sinc function.">
    <br>
</div> -->

<!-- </equation> -->

where `N` is the function order and `A` is the peak amplitude. For odd `N`, the waveform has a period of `2π`, and, for even `N`, the waveform has a period of `4π`.

To express the periodic [sinc][@stdlib/math/base/special/sinc] function as a function of a discrete iteration number `t` and the waveform period `τ`, for odd `N`, let

<!-- <equation class="equation" label="eq:periodic_sinc_substitution_odd" align="center" raw="x = \frac{2\pi (t-\varphi)}{\tau}" alt="Periodic sinc function substitution for odd N."> -->

```math
x = \frac{2\pi (t-\varphi)}{\tau}
```

<!-- <div class="equation" align="center" data-raw-text="x = \frac{2\pi (t-\varphi)}{\tau}" data-equation="eq:periodic_sinc_substitution_odd">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_substitution_odd.svg" alt="Periodic sinc function substitution for odd N.">
    <br>
</div> -->

<!-- </equation> -->

and, for even `N`, let

<!-- <equation class="equation" label="eq:periodic_sinc_substitution_even" align="center" raw="x = \frac{4\pi (t-\varphi)}{\tau}" alt="Periodic sinc function substitution for even N."> -->

```math
x = \frac{4\pi (t-\varphi)}{\tau}
```

<!-- <div class="equation" align="center" data-raw-text="x = \frac{4\pi (t-\varphi)}{\tau}" data-equation="eq:periodic_sinc_substitution_even">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_substitution_even.svg" alt="Periodic sinc function substitution for even N.">
    <br>
</div> -->

<!-- </equation> -->

where `τ` is the period (i.e., the number of iterations until a waveform repeats) and `φ` is the phase (iteration) offset. For odd `N`, we can thus substitute and express the periodic [sinc][@stdlib/math/base/special/sinc] function as

<!-- <equation class="equation" label="eq:periodic_sinc_in_terms_of_period" align="center" raw="D_N(t; A, \tau, \varphi) = \begin{cases}\frac{A\sin(N\pi(t-\varphi)/\tau)} {N\sin(\pi (t-\varphi)/\tau)} & t-\varphi \neq \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & t-\varphi = \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" alt="Periodic sinc function as a function of the waveform period."> -->

```math
D_N(t; A, \tau, \varphi) = \begin{cases}\frac{A\sin(N\pi(t-\varphi)/\tau)} {N\sin(\pi (t-\varphi)/\tau)} & t-\varphi \neq \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & t-\varphi = \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="D_N(t; A, \tau, \varphi) = \begin{cases}\frac{A\sin(N\pi(t-\varphi)/\tau)} {N\sin(\pi (t-\varphi)/\tau)} &amp; t-\varphi \neq \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} &amp; t-\varphi = \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" data-equation="eq:periodic_sinc_in_terms_of_period">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_in_terms_of_period.svg" alt="Periodic sinc function as a function of the waveform period.">
    <br>
</div> -->

<!-- </equation> -->

For even `N`, we can express the periodic [sinc][@stdlib/math/base/special/sinc] function similarly.

Note that the periodic [sinc][@stdlib/math/base/special/sinc] can be equivalently expressed as a function of the [sinc][@stdlib/math/base/special/sinc] function

<!-- <equation class="equation" label="eq:periodic_sinc_in_terms_of_sinc_function" align="center" raw="D_N(\pi x; N, A) = A \cdot \frac{\operatorname{sinc}(Nx/2)} {\operatorname{sinc}(x/2)}" alt="Periodic sinc function in terms of the sinc function."> -->

```math
D_N(\pi x; N, A) = A \cdot \frac{\mathop{\mathrm{sinc}}(Nx/2)} {\mathop{\mathrm{sinc}}(x/2)}
```

<!-- <div class="equation" align="center" data-raw-text="D_N(\pi x; N, A) = A \cdot \frac{\operatorname{sinc}(Nx/2)} {\operatorname{sinc}(x/2)}" data-equation="eq:periodic_sinc_in_terms_of_sinc_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_in_terms_of_sinc_function.svg" alt="Periodic sinc function in terms of the sinc function.">
    <br>
</div> -->

<!-- </equation> -->

<!-- TODO: add a figure showing a periodic sinc waveform -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterPeriodicSinc = require( '@stdlib/simulate/iter/periodic-sinc' );
```

#### iterPeriodicSinc( n\[, options] )

Returns an iterator which generates a periodic [sinc][@stdlib/math/base/special/sinc] waveform of order `n`.

```javascript
var it = iterPeriodicSinc( 7 );
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

-   **period**: period (i.e., the number of iterations before a waveform repeats). Default: `100`.
-   **amplitude**: peak amplitude. Default: `1.0`.
-   **offset**: phase offset (in units of iterations; zero-based). A negative offset translates a waveform to the left. A positive offset translates a waveform to the right. Default: `0`.
-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an iterator which generates a waveform that repeats every `100` iterations. To specify an alternative period, set the `period` option.

```javascript
var opts = {
    'period': 1000
};

var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

To adjust at what point the iterator begins in the waveform cycle, set the phase `offset` option. For example, to translate the waveform to the left,

```javascript
var opts = {
    'period': 100,
    'offset': -1
};

var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

To translate the waveform to the right,

```javascript
var opts = {
    'period': 100,
    'offset': 1
};

var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
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
var it = iterPeriodicSinc( 7, opts );
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
var iterPeriodicSinc = require( '@stdlib/simulate/iter/periodic-sinc' );

// Create an iterator:
var opts = {
    'period': 100,
    'amplitude': 10.0,
    'offset': -50,
    'iter': 100
};
var it = iterPeriodicSinc( 7, opts );

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

-   <span class="package-name">[`@stdlib/simulate/iter/sine-wave`][@stdlib/simulate/iter/sine-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sine wave.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sinc]: https://github.com/stdlib-js/math-base-special-sinc

<!-- <related-links> -->

[@stdlib/simulate/iter/sine-wave]: https://github.com/stdlib-js/simulate/tree/main/iter/sine-wave

<!-- </related-links> -->

</section>

<!-- /.links -->
