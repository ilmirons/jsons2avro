#!/usr/bin/env node

const program   = require("commander")
const fs        = require('fs')
const path      = require("path")
const converter = require('jsonschema-avro')
const JSON5     = require('json5')
const mm        = require('minimatch')
const rReadDir  = require('recursive-readdir')

program
    .version(require(path.join(__dirname, 'package.json')).version)
    .option('-i, --input <path>', 'Input path (jsonschema)', '.')
    .option('-o, --output <path>', 'Output directory (avro json)', './avro')
    .parse(process.argv)

const opts = program.opts();

rReadDir(opts.input)
    .then((files) => {
        const jschemas = files.filter(mm.filter('**.json*', {matchBase: true}))
        jschemas.forEach((jschema) => {
            let outFile = path.resolve(path.join(opts.output,
                (path.basename(jschema).split('.')[0]) + '.avsc').replace(/\\/g, '\\\\'))
            console.log(jschema, '=>', outFile)
            let _in = JSON5.parse(fs.readFileSync(jschema).toString());
            let _out = converter.convert(_in)
            fs.writeFileSync(outFile, JSON.stringify(_out, null, 2))
        })
}).catch((err) => console.log(err))
