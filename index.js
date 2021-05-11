#!/usr/bin/env node

const program = require("commander")
const fs = require('fs')
const path = require("path")
const converter = require('jsonschema-avro')

program
    .version(require(path.join(__dirname, 'package.json')).version)
    .requiredOption('-i, --input <path>', 'Input file path (jsonschema)')
    .option('-o, --output <path>', 'Output file path (avro json)', 'out.avsc')
    .parse(process.argv)

const opts = program.opts();

const _in = fs.readFileSync(opts.input).toString()
const _out = converter.convert(JSON.parse(_in))
fs.writeFileSync(opts.output, JSON.stringify(_out, null, 2))