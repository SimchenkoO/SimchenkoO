const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const isEven = num => num % 2 === 0;
3,76,58,3,9,91,5,54,64,94,95,28,65,38,59,58,56,83,35,41,40,8,69,89,2,85,0,13,45,26,76,76,80,94,65,2,31,95,63 - true
const removeDuplicates = array => Array.from(new Set(array));
