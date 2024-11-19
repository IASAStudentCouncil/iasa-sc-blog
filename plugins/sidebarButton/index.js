const path = require('path');

module.exports = function () {
  return {
    name: 'sidebar-button',
    getClientModules() {
      return [path.resolve(__dirname, './client')];
    },
  };
};