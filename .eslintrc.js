module.exports = {
    extends: 'standard',
    env: {
        node: true,
        es6: true
    },
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        quotes: ['error', 'single']
    }
}
