module.exports = function(config) {
  config.set({
  	// 告诉karma用的测试框架（mocha）和断言库 (karma-chai)
    frameworks: ['mocha','chai'],

    // 将功能代码和测试代码加载到karma
    files: [
      'src/*.js',
      'test/*.js'
    ],

    // 检测文件变动 文件变动自动执行测试文件
    autoWatch: true,   

    // 自动启用Chrome浏览器执行代码 karma-chrome-launcher
    browsers: ['Chrome'],

    // 测试报告的显示格式（命令行内的显示格式）  karma-mocha-reporter
    // 测试覆盖率报告  coverage
    reporters: ['mocha', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for 
      // do not include tests or libraries 
      // (these files will be instrumented by Istanbul) 
      'src/**/*.js': ['coverage']
    },
 
    // 生成的覆盖率报告 配置项
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};