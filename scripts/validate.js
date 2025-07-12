// scripts/validate.js

const fs = require('fs')
const path = require('path')
const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const schemaPath = path.join(__dirname, '../schema/v1.0.json')
const examplePath = path.join(__dirname, '../examples/valid-certificate.json')

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'))
const example = JSON.parse(fs.readFileSync(examplePath, 'utf-8'))

const ajv = new Ajv({ allErrors: true, strict: false })
addFormats(ajv)
const validate = ajv.compile(schema)

const valid = validate(example)
if (valid) {
	console.log('Certificate is valid according to schema v1.0')
} else {
	console.error('Certificate failed validation:')
	console.error(validate.errors)
	process.exit(1)
}
