exports.config = {
    specs: [
        //'test/*.js'
        'test/clear.js',
        'test/close.js',
        'test/empty.js',
        'test/events.js'
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    allScriptsTimeout: 60000
};
