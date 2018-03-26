module.exports = function(config) {
    config.set({

        frameworks: ["mocha", "karma-typescript"],

        files: [
            { pattern: "node_modules/expect.js/index.js" },
            { pattern: "src/**/*.ts" },
            { pattern: "test/**/*.ts" },
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        // 命令行中的测试结果 格式
        reporters: ['mocha', 'coverage','karma-typescript'],

        browsers: ["Chrome"]
    });
};
