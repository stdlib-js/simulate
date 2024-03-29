/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import iterawgn = require( './../../../iter/awgn' );
import iterawln = require( './../../../iter/awln' );
import iterawun = require( './../../../iter/awun' );
import iterBartlettHannPulse = require( './../../../iter/bartlett-hann-pulse' );
import iterBartlettPulse = require( './../../../iter/bartlett-pulse' );
import iterCosineWave = require( './../../../iter/cosine-wave' );
import iterDiracComb = require( './../../../iter/dirac-comb' );
import iterFlatTopPulse = require( './../../../iter/flat-top-pulse' );
import iterHannPulse = require( './../../../iter/hann-pulse' );
import iterLanczosPulse = require( './../../../iter/lanczos-pulse' );
import iterPeriodicSinc = require( './../../../iter/periodic-sinc' );
import iterPulse = require( './../../../iter/pulse' );
import iterSawtoothWave = require( './../../../iter/sawtooth-wave' );
import iterSineWave = require( './../../../iter/sine-wave' );
import iterSquareWave = require( './../../../iter/square-wave' );
import iterTriangleWave = require( './../../../iter/triangle-wave' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which introduces additive white Gaussian noise with standard deviation `sigma`.
	*
	* @param iterator - input iterator
	* @param sigma - standard deviation of the noise
	* @param options - function options
	* @param options.prng - pseudorandom number generator for generating pseudorandom numbers drawn from a standard normal distribution
	* @param options.state - pseudorandom number generator state
	* @param options.seed - pseudorandom number generator seed
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws `sigma` must be a positive number
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iterSineWave = require( './../../../iter/sine-wave' );
	*
	* var sine = iterSineWave({
	*     'iter': 100
	* });
	*
	* var it = ns.iterawgn( sine, 0.5 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterawgn: typeof iterawgn;

	/**
	* Returns an iterator which introduces additive white Laplacian (a.k.a. biexponential or double-exponential) noise with standard deviation `sigma`.
	*
	* @param iterator - input iterator
	* @param sigma - standard deviation of the noise
	* @param options - function options
	* @param options.prng - pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`
	* @param options.state - pseudorandom number generator state
	* @param options.seed - pseudorandom number generator seed
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws `sigma` must be a positive number
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iterSineWave = require( './../../../iter/sine-wave' );
	*
	* var sine = iterSineWave({
	*     'iter': 100
	* });
	*
	* var it = ns.iterawln( sine, 0.5 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterawln: typeof iterawln;

	/**
	* Returns an iterator which introduces additive white uniform noise with standard deviation `sigma`.
	*
	* @param iterator - input iterator
	* @param sigma - standard deviation of the noise
	* @param options - function options
	* @param options.prng - pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`
	* @param options.state - pseudorandom number generator state
	* @param options.seed - pseudorandom number generator seed
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws `sigma` must be a positive number
	* @throws must provide a valid state
	* @returns iterator
	*
	* @example
	* var iterSineWave = require( './../../../iter/sine-wave' );
	*
	* var sine = iterSineWave({
	*     'iter': 100
	* });
	*
	* var it = ns.iterawun( sine, 0.5 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterawun: typeof iterawun;

	/**
	* Returns an iterator which generates a Bartlett-Hann pulse waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 100)
	* @param options.duration - pulse duration (default: options.period)
	* @param options.amplitude - amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `duration` option must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `amplitude` option must be a positive number
	* @throws `iter` option must be a nonnegative integer
	* @throws `duration` option must be less than or equal to the `period`
	* @throws `duration` option must be greater than 2
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 10
	* };
	*
	* var iter = ns.iterBartlettHannPulse( opts );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBartlettHannPulse: typeof iterBartlettHannPulse;

	/**
	* Returns an iterator which generates a Bartlett pulse waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 100)
	* @param options.duration - pulse duration (default: options.period)
	* @param options.amplitude - amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `duration` option must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `amplitude` option must be a positive number
	* @throws `iter` option must be a nonnegative integer
	* @throws `duration` option must be less than or equal to the `period`
	* @throws `duration` option must be greater than 2
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 10
	* };
	*
	* var iter = ns.iterBartlettPulse( opts );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBartlettPulse: typeof iterBartlettPulse;

	/**
	* Returns an iterator which generates a cosine wave.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a cosine wave repeats (default: 10)
	* @param options.amplitude - peak amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `period` option must be a positive integer
	* @throws `amplitude` must be a nonnegative number
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterCosineWave( opts );
	*
	* var v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns 0.0
	*
	* v = iter.next().value;
	* // returns 1.0
	*
	* // ...
	*/
	iterCosineWave: typeof iterCosineWave;

	/**
	* Returns an iterator which generates a Dirac comb.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 10)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterDiracComb( opts );
	*
	* var v = iter.next().value;
	* // returns Infinity
	*
	* v = iter.next().value;
	* // returns 0.0
	*
	* v = iter.next().value;
	* // returns 0.0
	*
	* // ...
	*/
	iterDiracComb: typeof iterDiracComb;

	/**
	* Returns an iterator which generates a flat top pulse waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 100)
	* @param options.duration - pulse duration (default: options.period)
	* @param options.amplitude - amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `duration` option must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `amplitude` option must be a positive number
	* @throws `iter` option must be a nonnegative integer
	* @throws `duration` option must be less than or equal to the `period`
	* @throws `duration` option must be greater than 2
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 10
	* };
	*
	* var iter = ns.iterFlatTopPulse( opts );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFlatTopPulse: typeof iterFlatTopPulse;

	/**
	* Returns an iterator which generates a Hann pulse waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 100)
	* @param options.duration - pulse duration (default: options.period)
	* @param options.amplitude - amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `duration` option must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `amplitude` option must be a positive number
	* @throws `iter` option must be a nonnegative integer
	* @throws `duration` option must be less than or equal to the `period`
	* @throws `duration` option must be greater than 2
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 10
	* };
	*
	* var iter = ns.iterHannPulse( opts );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterHannPulse: typeof iterHannPulse;

	/**
	* Returns an iterator which generates a Lanczos pulse waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 100)
	* @param options.duration - pulse duration (default: options.period)
	* @param options.amplitude - amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `duration` option must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `amplitude` option must be a positive number
	* @throws `iter` option must be a nonnegative integer
	* @throws `duration` option must be less than or equal to the `period`
	* @throws `duration` option must be greater than 2
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 10
	* };
	*
	* var iter = ns.iterLanczosPulse( opts );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLanczosPulse: typeof iterLanczosPulse;

	/**
	* Returns an iterator which generates a periodic sinc waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param n - order
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 100)
	* @param options.amplitude - peak amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws first argument must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `amplitude` must be a nonnegative number
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 1000
	* };
	*
	* var iter = ns.iterPeriodicSinc( 7, opts );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterPeriodicSinc: typeof iterPeriodicSinc;

	/**
	* Returns an iterator which generates a pulse waveform.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 10)
	* @param options.duration - number of consecutive iterations of maximum amplitude during one period (default: options.period/2)
	* @param options.min - minimum amplitude (default: 0.0)
	* @param options.max - maximum amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `duration` option must be a positive integer
	* @throws `period` option must be a positive integer
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @throws `duration` option must be less than the `period`
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterPulse( opts );
	*
	* var v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns 0.0
	*
	* // ...
	*/
	iterPulse: typeof iterPulse;

	/**
	* Returns an iterator which generates a sawtooth wave.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 10)
	* @param options.amplitude - peak amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `period` option must be a positive integer
	* @throws `amplitude` must be a nonnegative number
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterSawtoothWave( opts );
	*
	* var v = iter.next().value;
	* // returns 0.0
	*
	* v = iter.next().value;
	* // returns ~0.5
	*
	* v = iter.next().value;
	* // returns ~1.0
	*
	* // ...
	*/
	iterSawtoothWave: typeof iterSawtoothWave;

	/**
	* Returns an iterator which generates a sine wave.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a sine wave repeats (default: 10)
	* @param options.amplitude - peak amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `period` option must be a positive integer
	* @throws `amplitude` must be a nonnegative number
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterSineWave( opts );
	*
	* var v = iter.next().value;
	* // returns 0.0
	*
	* v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns 0.0
	*
	* // ...
	*/
	iterSineWave: typeof iterSineWave;

	/**
	* Returns an iterator which generates a square wave.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a square wave repeats (default: 10)
	* @param options.min - minimum amplitude (default: -1.0)
	* @param options.max - maximum amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `period` option must be a positive even integer
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterSquareWave( opts );
	*
	* var v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns -1.0
	*
	* // ...
	*/
	iterSquareWave: typeof iterSquareWave;

	/**
	* Returns an iterator which generates a triangle wave.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.period - number of iterations before a waveform repeats (default: 10)
	* @param options.amplitude - peak amplitude (default: 1.0)
	* @param options.offset - phase offset (in units of iterations; default: 0)
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `period` option must be a positive integer
	* @throws `amplitude` must be a nonnegative number
	* @throws `offset` option must be an integer
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'period': 4
	* };
	*
	* var iter = ns.iterTriangleWave( opts );
	*
	* var v = iter.next().value;
	* // returns 0.0
	*
	* v = iter.next().value;
	* // returns 1.0
	*
	* v = iter.next().value;
	* // returns 0.0
	*
	* // ...
	*/
	iterTriangleWave: typeof iterTriangleWave;
}

/**
* Simulation iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
