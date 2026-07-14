# Talos Hello World Evaluation

This repository provides simple Python and JavaScript deliverables for testing the Talos evaluation and validation pipelines.

## Installation and Setup

To install dependencies for Python:
```bash
pip install -r requirements.txt
```

To initialize the JavaScript project (no external dependencies are required as it uses native assertions):
```bash
npm install
```

## Usage

To run the Python implementation directly:
```bash
python hello.py
```

To run the JavaScript implementation directly:
```bash
node hello.js
```

## Running Tests

To run tests for Python:
```bash
pytest test_hello.py
```

To run tests for JavaScript:
```bash
npm test
```

## Examples

Below is an example of importing the greeting function in a Node.js project:

```javascript
const { greet } = require('./hello');
console.log(greet('Developer'));
// Output: Hello, Developer!
```
