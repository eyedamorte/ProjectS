module.exports = {
    "main": {
        input: 'http://localhost:3000/api-yaml',
        output: {
            target: "./src/shared/api/generated.ts",
            prettier: true,
            override: {
                mutator: {
                    path: './src/shared/api/api-instance.ts',
                    name: 'createInstance'
                }
            }
        }
    }
}