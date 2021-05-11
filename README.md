## jsons2avro

A simple cli to convert json-schema to avro schema.
Real kudos go to the author(s) of [jsonschema-avro](https://github.com/thedumbterminal/jsonschema-avro) which does all 
the heavy lifting.
I just wrapped it in a cli. Requires nodejs

### Install

```bash
npm -i jsons2avro -g
```

### Usage

```bash
jsons2avro -i input.json [-o out.avsc]
```