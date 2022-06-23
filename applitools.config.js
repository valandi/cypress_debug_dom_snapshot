module.exports = {
    testConcurrency: 20,
    apiKey: 'APPLITOOLS_API_KEY',
    browser: [
        {width: 1920, height: 1080, name: 'chrome'},
        {width: 800, height: 600, name: 'firefox'},
    ],
    showLogs: true,
    failCypressOnDiff: false,
    disableBrowserFetching: true
}
