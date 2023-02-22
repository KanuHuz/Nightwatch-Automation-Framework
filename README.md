# Nightwatch.js Automation Framework
This is a sample framework built with Nightwatch.js that demonstrates how to automate a login page using the Page Object Model (POM) and custom commands.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
* Node.js (v10 or later)
* Nightwatch.js (v1 or later)
# Installing

1. Clone the repository or download the zip file and extract it.
2. Navigate to the project directory.
3. Install the project dependencies by running the following command in your terminal:

> npm install

# Running the Tests
To run all the tests, run the following command in your terminal:

> npm test

# Project Structure

├── custom-commands
|   ├── login.js
├── pages
|   ├── LoginPage.js
├── tests
|   ├── login.js
├── nightwatch.conf.js
└── package.json

- custom-commands
This directory contains custom commands used in the tests.

- pages
This directory contains page objects used in the tests.

- tests
This directory contains the actual tests.

- nightwatch.conf.js
This is the configuration file for Nightwatch.js.

- package.json
This file contains the project's dependencies and scripts.

# Built With
* Nightwatch.js - End-to-end testing framework
* Page Object Model (POM) - Design pattern for web automation
* Custom Commands - Extend the core functionality of Nightwatch.js
