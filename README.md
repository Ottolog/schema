# Ottolog Schema

The official JSON Schema specification for Ottolog digital vehicle checkup
certificates.

## About

Ottolog is a protocol for verifiable vehicle maintenance certification. This
repository contains the schema definition used to validate certificates issued
by garages and trusted by partners (resellers, insurers, inspection agencies).

## Structure

-   `schema/v1.0.json`: Stable schema (current)
-   `schema/drafts/`: Experimental or upcoming versions
-   `examples/`: Sample certificates for testing

## Usage

Install a validator like [Ajv](https://ajv.js.org/) to validate:

```bash
npm install ajv
const Ajv = require('ajv');
const schema = require('./schema/v1.0.json');
const data = require('./examples/valid-certificate.json');
const ajv = new Ajv();
const validate = ajv.compile(schema);
console.log(validate(data));
```
