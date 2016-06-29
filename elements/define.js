function define(listOfDeps, closure) {
	module.exports = closure.apply(closure, listOfDeps);
}
define.amd = {};
