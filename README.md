## jsons2avro

A simple cli to convert json-schema to avro schema.
Real kudos go to the author(s) of [jsonschema-avro](https://github.com/thedumbterminal/jsonschema-avro) which does all 
the heavy lifting. Json schema parsing support JSON5 (basically means you can add comments to json schemas: they 
likely won't 
validate as json schema, but they will translate to valid avro schema without errors)

### Install

```bash
npm -i jsons2avro -g
```

### Usage

```bash
jsons2avro -i <inputGlobPath> [-o <outputDir>]
```