// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import{factory as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import{factory as b}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-laplace@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-three@v0.0.8-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.0.7-esm/index.mjs";import{isPrimitive as O}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as x}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as L}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as V}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinc@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import{isPrimitive as F}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tan@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atan@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@esm/index.mjs";function C(e,t){return s(t)?u(t,"duration")&&(e.duration=t.duration,!x(t.duration))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!r(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function H(e,t,n){return n*(.62-.48*E(e/(t-=1)-.5)-.38*T(2/t*e))}function D(e,t){return s(t)?u(t,"duration")&&(e.duration=t.duration,!x(t.duration))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!r(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function I(e,t){return s(t)?u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!V(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function J(e,t){return s(t)?u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function K(e,t){return s(t)?u(t,"duration")&&(e.duration=t.duration,!x(t.duration))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!r(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function M(e,t,n){var i=2/(n-1);return t*(.21557895-.41663158*T(i*e)+.277263158*T(2*i*e)-.083578947*T(3*i*e)+.006947368*T(4*i*e))}function Q(e,t){return s(t)?u(t,"duration")&&(e.duration=t.duration,!x(t.duration))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!r(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function X(e,t){return s(t)?u(t,"duration")&&(e.duration=t.duration,!x(t.duration))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!r(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Y(e,t){return s(t)?u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!V(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Z(e,t){return s(t)?u(t,"duration")&&(e.duration=t.duration,!x(t.duration))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):u(t,"min")&&(e.min=t.min,!F(t.min)||W(t.min))?new TypeError(v("invalid option. `%s` option must be a number. Option: `%s`.","min",t.min)):u(t,"max")&&(e.max=t.max,!F(t.max)||W(t.max))?new TypeError(v("invalid option. `%s` option must be a number. Option: `%s`.","max",t.max)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function $(e,t){return s(t)?u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!V(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function _(e,t){return s(t)?u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!V(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function ee(e,t){return s(t)?!u(t,"period")||(e.period=t.period,x(t.period)&&q(t.period))?u(t,"min")&&(e.min=t.min,!F(t.min)||W(t.min))?new TypeError(v("invalid option. `%s` option must be a number. Option: `%s`.","min",t.min)):u(t,"max")&&(e.max=t.max,!F(t.max)||W(t.max))?new TypeError(v("invalid option. `%s` option must be a number. Option: `%s`.","max",t.max)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid option. `%s` option must be an positive even integer. Option: `%s`.","period",t.period)):new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}function te(e,t){return s(t)?u(t,"period")&&(e.period=t.period,!x(t.period))?new TypeError(v("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):u(t,"amplitude")&&(e.amplitude=t.amplitude,!V(t.amplitude))?new TypeError(v("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):u(t,"offset")&&(e.offset=t.offset,!O(t.offset))?new TypeError(v("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):u(t,"iter")&&(e.iter=t.iter,!L(t.iter))?new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",t))}var ne={};e(ne,"iterawgn",(function e(h,b,c){var w,j,y,E;if(!o(h))throw new TypeError(v("invalid argument. First argument must be an iterator. Value: `%s`.",h));if(!r(b))throw new TypeError(v("invalid argument. Second argument must be a positive number. Value: `%s`.",b));if(j={copy:!0},arguments.length>2){if(!s(c))throw new TypeError(v("invalid argument. Third argument must be an object. Value: `%s`.",c));if(u(c,"copy")&&(j.copy=c.copy,!a(c.copy)))throw new TypeError(v("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",c.copy));if(u(c,"prng")){if(!p(c.prng))throw new TypeError(v("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",c.prng));w=c.prng}else if(u(c,"state")){if(j.state=c.state,!d(c.state))throw new TypeError(v("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",c.state))}else if(u(c,"seed")&&(j.seed=c.seed,void 0===c.seed))throw new TypeError(v("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",c.seed))}return void 0===w&&(w=g(j)),t(y={},"next",R),t(y,"return",N),f&&p(h[f])&&t(y,f,q),c&&c.prng?(t(y,"seed",null),t(y,"seedLength",null),i(y,"state",l(null),m),t(y,"stateLength",null),t(y,"byteLength",null),t(y,"PRNG",null)):(n(y,"seed",T),n(y,"seedLength",O),i(y,"state",V,P),n(y,"stateLength",x),n(y,"byteLength",L),t(y,"PRNG",w.PRNG)),y;function T(){return w.seed}function O(){return w.seedLength}function x(){return w.stateLength}function L(){return w.byteLength}function V(){return w.state}function P(e){w.state=e}function R(){var e;return E?{done:!0}:(e=h.next()).done?(E=!0,e):{value:e="number"==typeof e.value?e.value+b*w():NaN,done:!1}}function N(e){return E=!0,arguments.length?{value:e,done:!0}:{done:!0}}function q(){return e(h[f](),b,j)}})),e(ne,"iterawln",(function e(m,v,g){var j,y,E,T;if(!o(m))throw new TypeError(c("invalid argument. First argument must be an iterator. Value: `%s`.",m));if(!r(v))throw new TypeError(c("invalid argument. Second argument must be a positive number. Value: `%s`.",v));if(y={copy:!0},arguments.length>2){if(!s(g))throw new TypeError(c("invalid argument. Third argument must be an object. Value: `%s`.",g));if(u(g,"copy")&&(y.copy=g.copy,!a(g.copy)))throw new TypeError(c("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",g.copy));if(u(g,"prng")){if(!p(g.prng))throw new TypeError(c("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",g.prng));y.prng=g.prng}else if(u(g,"state")){if(y.state=g.state,!d(g.state))throw new TypeError(c("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",g.state))}else if(u(g,"seed")&&(y.seed=g.seed,void 0===g.seed))throw new TypeError(c("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",g.seed))}return j=b(0,v/w,y),t(E={},"next",N),t(E,"return",q),f&&p(m[f])&&t(E,f,G),g&&g.prng?(t(E,"seed",null),t(E,"seedLength",null),i(E,"state",l(null),h),t(E,"stateLength",null),t(E,"byteLength",null),t(E,"PRNG",g.prng)):(n(E,"seed",O),n(E,"seedLength",x),i(E,"state",P,R),n(E,"stateLength",L),n(E,"byteLength",V),t(E,"PRNG",j.PRNG)),E;function O(){return j.seed}function x(){return j.seedLength}function L(){return j.stateLength}function V(){return j.byteLength}function P(){return j.state}function R(e){j.state=e}function N(){var e;return T?{done:!0}:(e=m.next()).done?(T=!0,e):{value:e="number"==typeof e.value?e.value+j():NaN,done:!1}}function q(e){return T=!0,arguments.length?{value:e,done:!0}:{done:!0}}function G(){return e(m[f](),v,y)}})),e(ne,"iterawun",(function e(m,g,b){var c,w,E,T,O;if(!o(m))throw new TypeError(v("invalid argument. First argument must be an iterator. Value: `%s`.",m));if(!r(g))throw new TypeError(v("invalid argument. Second argument must be a positive number. Value: `%s`.",g));if(w={copy:!0},arguments.length>2){if(!s(b))throw new TypeError(v("invalid argument. Third argument must be an object. Value: `%s`.",b));if(u(b,"copy")&&(w.copy=b.copy,!a(b.copy)))throw new TypeError(v("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",b.copy));if(u(b,"prng")){if(!p(b.prng))throw new TypeError(v("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",b.prng));w.prng=b.prng}else if(u(b,"state")){if(w.state=b.state,!d(b.state))throw new TypeError(v("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",b.state))}else if(u(b,"seed")&&(w.seed=b.seed,void 0===b.seed))throw new TypeError(v("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",b.seed))}return c=j(-(O=g*y),O,w),t(E={},"next",q),t(E,"return",G),f&&p(m[f])&&t(E,f,S),b&&b.prng?(t(E,"seed",null),t(E,"seedLength",null),i(E,"state",l(null),h),t(E,"stateLength",null),t(E,"byteLength",null),t(E,"PRNG",b.prng)):(n(E,"seed",x),n(E,"seedLength",L),i(E,"state",R,N),n(E,"stateLength",V),n(E,"byteLength",P),t(E,"PRNG",c.PRNG)),E;function x(){return c.seed}function L(){return c.seedLength}function V(){return c.stateLength}function P(){return c.byteLength}function R(){return c.state}function N(e){c.state=e}function q(){var e;return T?{done:!0}:(e=m.next()).done?(T=!0,e):{value:e="number"==typeof e.value?e.value+c():NaN,done:!1}}function G(e){return T=!0,arguments.length?{value:e,done:!0}:{done:!0}}function S(){return e(m[f](),g,w)}})),e(ne,"iterBartlettHannPulse",(function e(n){var i,o,r,s,p,a;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=C(i,n)))throw s;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(c("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",i.duration));if(i.duration<=2)throw new RangeError(c("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",i.duration));return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=0,t(o={},"next",d),t(o,"return",u),f&&t(o,f,m),o;function d(){return a+=1,r||a>i.iter?{done:!0}:{value:(p=(p+1)%i.period)<i.duration?H(p,i.duration,i.amplitude):0,done:!1}}function u(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function m(){return e(i)}})),e(ne,"iterBartlettPulse",(function e(n){var i,o,r,s,p,a,d;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=D(i,n)))throw s;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(v("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",i.duration));if(i.duration<=2)throw new RangeError(v("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",i.duration));return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),a=2/(i.duration-1),p-=1,d=0,t(o={},"next",u),t(o,"return",m),f&&t(o,f,l),o;function u(){return d+=1,r||d>i.iter?{done:!0}:{value:(p=(p+1)%i.period)<i.duration?i.amplitude*(1-E(a*p-1)):0,done:!1}}function m(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(i)}})),e(ne,"iterCosineWave",(function e(n){var i,o,r,s,p,a,d;if(i={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=I(i,n)))throw s;return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=2/i.period,d=0,t(o={},"next",u),t(o,"return",m),f&&t(o,f,l),o;function u(){return d+=1,r||d>i.iter?{done:!0}:(p+=1,p%=i.period,{value:i.amplitude*T(a*p),done:!1})}function m(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(i)}})),e(ne,"iterDiracComb",(function e(n){var i,o,r,s,p,a;if(i={period:10,offset:0,iter:1e308},arguments.length&&(s=J(i,n)))throw s;return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=0,t(o={},"next",d),t(o,"return",u),f&&t(o,f,m),o;function d(){return a+=1,r||a>i.iter?{done:!0}:(p+=1,{value:0===(p%=i.period)?P:0,done:!1})}function u(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function m(){return e(i)}})),e(ne,"iterFlatTopPulse",(function e(n){var i,o,r,s,p,a;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=K(i,n)))throw s;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(c("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",i.duration));if(i.duration<=2)throw new RangeError(c("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",i.duration));return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=0,t(o={},"next",d),t(o,"return",u),f&&t(o,f,m),o;function d(){return a+=1,r||a>i.iter?{done:!0}:{value:(p=(p+1)%i.period)<i.duration?M(p,i.amplitude,i.duration):0,done:!1}}function u(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function m(){return e(i)}})),e(ne,"iterHannPulse",(function e(n){var i,o,r,s,p,a,d,u;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=Q(i,n)))throw s;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(c("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",i.duration));if(i.duration<=2)throw new RangeError(c("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",i.duration));return(a=(i.period-i.offset)%i.period)<0&&(a+=i.period),p=.5*i.amplitude,d=2/(i.duration-1),a-=1,u=0,t(o={},"next",m),t(o,"return",l),f&&t(o,f,v),o;function m(){return u+=1,r||u>i.iter?{done:!0}:{value:(a=(a+1)%i.period)<i.duration?p*(1-R(d*a)):0,done:!1}}function l(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return e(i)}})),e(ne,"iterLanczosPulse",(function e(n){var i,o,r,s,p,a,d;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=X(i,n)))throw s;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(c("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",i.duration));if(i.duration<=2)throw new RangeError(c("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",i.duration));return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),a=2/(i.duration-1),p-=1,d=0,t(o={},"next",u),t(o,"return",m),f&&t(o,f,l),o;function u(){return d+=1,r||d>i.iter?{done:!0}:{value:(p=(p+1)%i.period)<i.duration?i.amplitude*N(a*p-1):0,done:!1}}function m(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(i)}})),e(ne,"iterPeriodicSinc",(function e(n,i){var o,r,s,p,a,d,u,m,l,v;if(!x(n))throw new TypeError(c("invalid argument. First argument must be a positive integer. Value: `%s`.",n));if(o={period:100,amplitude:1,offset:0,iter:1e308},arguments.length>1&&(p=Y(o,i)))throw p;return(m=(o.period-o.offset)%o.period)<0&&(m+=o.period),q(n)?(a=o.offset>=0?-1:1,u=o.period/2,d=S(u),l=n/u):l=n/o.period,m-=1,v=0,t(r={},"next",void 0===a?h:g),t(r,"return",b),f&&t(r,f,w),r;function g(){var e;return v+=1,s||v>o.iter?{done:!0}:(m+=1,0===(m%=o.period)||m===u?e=(a*=-1)*o.amplitude:(m===d&&(a*=-1),e=o.amplitude*G(l*m)/(n*G(m/u))),{value:e,done:!1})}function h(){return v+=1,s||v>o.iter?{done:!0}:(m+=1,{value:0===(m%=o.period)?o.amplitude:o.amplitude*G(l*m)/(n*G(m/o.period)),done:!1})}function b(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return e(n,o)}})),e(ne,"iterPulse",(function e(n){var i,o,r,s,p,a;if(i={duration:-1,period:10,min:0,max:1,offset:0,iter:1e308},arguments.length&&(s=Z(i,n)))throw s;if(-1===i.duration&&(i.duration=S(i.period/2)),i.duration>=i.period)throw new RangeError(v("invalid option. `%s` option must be less than the period. Option: `%s`.","duration",i.duration));return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=0,t(o={},"next",d),t(o,"return",u),f&&t(o,f,m),o;function d(){return a+=1,r||a>i.iter?{done:!0}:{value:(p=(p+1)%i.period)<i.duration?i.max:i.min,done:!1}}function u(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function m(){return e(i)}})),e(ne,"iterSawtoothWave",(function e(n){var i,o,r,s,p,a,d,u;if(i={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=$(i,n)))throw s;return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=z/i.period,d=i.amplitude/U,u=0,t(o={},"next",m),t(o,"return",l),f&&t(o,f,v),o;function m(){return u+=1,r||u>i.iter?{done:!0}:(p+=1,p%=i.period,{value:d*A(k(a*p)),done:!1})}function l(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return e(i)}})),e(ne,"iterSineWave",(function e(n){var i,o,r,s,p,a,d;if(i={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=_(i,n)))throw s;return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=2/i.period,d=0,t(o={},"next",u),t(o,"return",m),f&&t(o,f,l),o;function u(){return d+=1,r||d>i.iter?{done:!0}:(p+=1,p%=i.period,{value:i.amplitude*G(a*p),done:!1})}function m(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(i)}})),e(ne,"iterSquareWave",(function e(n){var i,o,r,s,p,a,d;if(i={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(s=ee(i,n)))throw s;return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=i.period/2,d=0,t(o={},"next",u),t(o,"return",m),f&&t(o,f,l),o;function u(){return d+=1,r||d>i.iter?{done:!0}:{value:(p+=1)%i.period<a?i.max:i.min,done:!1}}function m(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(i)}})),e(ne,"iterTriangleWave",(function e(n){var i,o,r,s,p,a,d,u;if(i={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(s=te(i,n)))throw s;return(p=(i.period-i.offset)%i.period)<0&&(p+=i.period),p-=1,a=2/i.period,d=i.amplitude/U,u=0,t(o={},"next",m),t(o,"return",l),f&&t(o,f,v),o;function m(){return u+=1,r||u>i.iter?{done:!0}:(p+=1,p%=i.period,{value:d*B(G(a*p)),done:!1})}function l(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return e(i)}}));var ie={};e(ie,"iterators",ne);export{ie as default,ne as iterators};
//# sourceMappingURL=index.mjs.map
