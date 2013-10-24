# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v1.0.0
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i5 1.3Ghz (4250U, Haswell)
- OS: OS X 10.9
- Node.JS version: 0.10.20

## Results

	Rendering 100000 templates:

	ECT
	  Escaped   : 1433ms
	  Unescaped : 81ms
	  Total     : 1514ms

	Dust
	  Escaped   : 1677ms
	  Unescaped : 276ms
	  Total     : 1953ms

	Hogan.js
	  Escaped   : 1934ms
	  Unescaped : 556ms
	  Total     : 2490ms

	Gaikan
	  Escaped   : 1696ms
	  Unescaped : 53ms
	  Total     : 1749ms

	Fest
	  Escaped   : 1514ms
	  Unescaped : 167ms
	  Total     : 1681ms

	EJS without `with`
	  Escaped   : 2915ms
	  Unescaped : 233ms
	  Total     : 3148ms

	doT
	  Escaped   : 2360ms
	  Unescaped : 48ms
	  Total     : 2408ms

	Swig
	  Escaped   : 3160ms
	  Unescaped : 197ms
	  Total     : 3357ms

	Underscore
	  Escaped   : 2408ms
	  Unescaped : 1697ms
	  Total     : 4105ms

	EJS
	  Escaped   : 4667ms
	  Unescaped : 1512ms
	  Total     : 6179ms

	Eco
	  Escaped   : 4602ms
	  Unescaped : 517ms
	  Total     : 5119ms

	Handlebars.js
	  Escaped   : 3018ms
	  Unescaped : 1197ms
	  Total     : 4215ms

	Jade without `with`
	  Escaped   : 4766ms
	  Unescaped : 1873ms
	  Total     : 6639ms

	CoffeeKup
	  Escaped   : 2646ms
	  Unescaped : 4934ms
	  Total     : 7580ms

	Jade
	  Escaped   : 8587ms
	  Unescaped : 6020ms
	  Total     : 14607ms

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
