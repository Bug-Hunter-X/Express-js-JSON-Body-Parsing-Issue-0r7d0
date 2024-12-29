# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where JSON request bodies are not parsed correctly.  The problem arises when the `Content-Type` header in the request is missing or set to an incorrect value (e.g., not `application/json`).

## Bug

The provided `bug.js` file contains an Express.js application that attempts to parse a JSON request body. However, if the client sends a request without the correct `Content-Type` header, the request body will not be parsed, leading to unexpected behavior or errors.

## Solution

The `bugSolution.js` file demonstrates a solution to this problem. It uses middleware to explicitly parse the JSON body even if the `Content-Type` header is missing.