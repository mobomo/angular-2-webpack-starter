const path = require('path');
const fs = require('fs');

exports.root = function root(...args) {
  return path.resolve(__dirname, '..', ...args);
}

exports.getNodeDependencies = function(dependencies, includeDevDependencies) {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  let deps = Object.keys(pkg.dependencies);
  if (includeDevDependencies) deps = deps.concat(Object.keys(pkg.devDependencies));
  return deps.filter(dep =>
    dependencies.reduce((current, next) => {
      if (current) return current;
      if (dep.match(next)) return dep;
    }, '')
  );
}
