# doccla-test
Web automation tech test for Doccla

### Overview
These are four tests run against [saucedemo.com](https://www.saucedemo.com/v1/) and test: 
- A happy path through the main flow of the site i.e. selecting and purchasing some items
- One happy path test against the login
- Two unhappy path tests against the login

### How to run

1. Run the `npm install` command to install the relevant packages
2. Then run `npm run cypress:run` to run the tests in the CLI against Chrome or `npm run cypress:open` to run the tests in the Cypress Launcher
`
### Locations
The test files are in the `e2e` directory and all relevant code is in the `support` directory

### Notes
- I designed the login tests with scalability in mind. As long you follow the pattern given with the enum and objects, you'll quickly be able to increase the test cases  