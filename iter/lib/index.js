/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name iterawgn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/awgn}
*/
setReadOnly( ns, 'iterawgn', require( './../../iter/awgn' ) );

/**
* @name iterawln
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/awln}
*/
setReadOnly( ns, 'iterawln', require( './../../iter/awln' ) );

/**
* @name iterawun
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/awun}
*/
setReadOnly( ns, 'iterawun', require( './../../iter/awun' ) );

/**
* @name iterBartlettHannPulse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/bartlett-hann-pulse}
*/
setReadOnly( ns, 'iterBartlettHannPulse', require( './../../iter/bartlett-hann-pulse' ) );

/**
* @name iterBartlettPulse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/bartlett-pulse}
*/
setReadOnly( ns, 'iterBartlettPulse', require( './../../iter/bartlett-pulse' ) );

/**
* @name iterCosineWave
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/cosine-wave}
*/
setReadOnly( ns, 'iterCosineWave', require( './../../iter/cosine-wave' ) );

/**
* @name iterDiracComb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/dirac-comb}
*/
setReadOnly( ns, 'iterDiracComb', require( './../../iter/dirac-comb' ) );

/**
* @name iterFlatTopPulse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/flat-top-pulse}
*/
setReadOnly( ns, 'iterFlatTopPulse', require( './../../iter/flat-top-pulse' ) );

/**
* @name iterHannPulse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/hann-pulse}
*/
setReadOnly( ns, 'iterHannPulse', require( './../../iter/hann-pulse' ) );

/**
* @name iterLanczosPulse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/lanczos-pulse}
*/
setReadOnly( ns, 'iterLanczosPulse', require( './../../iter/lanczos-pulse' ) );

/**
* @name iterPeriodicSinc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/periodic-sinc}
*/
setReadOnly( ns, 'iterPeriodicSinc', require( './../../iter/periodic-sinc' ) );

/**
* @name iterPulse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/pulse}
*/
setReadOnly( ns, 'iterPulse', require( './../../iter/pulse' ) );

/**
* @name iterSawtoothWave
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/sawtooth-wave}
*/
setReadOnly( ns, 'iterSawtoothWave', require( './../../iter/sawtooth-wave' ) );

/**
* @name iterSineWave
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/sine-wave}
*/
setReadOnly( ns, 'iterSineWave', require( './../../iter/sine-wave' ) );

/**
* @name iterSquareWave
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/square-wave}
*/
setReadOnly( ns, 'iterSquareWave', require( './../../iter/square-wave' ) );

/**
* @name iterTriangleWave
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/simulate/iter/triangle-wave}
*/
setReadOnly( ns, 'iterTriangleWave', require( './../../iter/triangle-wave' ) );


// EXPORTS //

module.exports = ns;
