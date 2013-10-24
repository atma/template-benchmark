var swig = require('swig');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./swig/tpl_escaped.swig', {autoescape: true});
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./swig/tpl_unescaped.swig', {autoescape: false});
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};
