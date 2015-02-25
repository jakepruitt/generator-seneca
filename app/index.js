'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Seneca') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What would you like to name your project?',
      default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function (props) {
      this.projectName = this._.camelize(this._.slugify(this._.humanize(props.projectName)));

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template('_bower.json', 'bower.json');
      this.template('_package.json', 'package.json');
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('server.js'),
        this.destinationPath('server.js')
      );
      this.directory('client');
      this.directory('server');
      this.directory('test');
    }
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      skipInstall: this.options['skip-install']
    });
  }
});
