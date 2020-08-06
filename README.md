# Let's Fly
Lets Fly is a single page Application that easily allows Pilots to connect with other Pilots to fly with. Pilots are social people who enjoy flying with others for company and safety. This app allows pilots to post future flights for which they are looking for a co-pilot. The co-pilot need could be for a safety pilot, instruction, split-time or just have someone in the right seat for company. Rather than sending out a mass text or calling multiple people you can simply post a future flight on the Flight Board by  filling out a form with the flight details. Pilots can also look at Flight post to see if there is a flight they would be interested in and send that user a direct message..

## Installation

Along with the Let's repository, you will need to clone the [LetsFlyAPI](https://github.com/Bltatum/LetsFlyAPI) repo as well which contains the data structure.

You will need [json-server](https://www.npmjs.com/package/json-server) installed in order to create the persistant data storage.

To start the json server, run the following command in your terminal inside of the LetsFlyAPI directory:

```bash
json-server -p 8088 -w database.json
```
To start the application, run the following command in your terminal inside of the LetsFly directory:

```bash
npm start
```
## Dummy User Data

To quickly get to the data login with the following dummy user data:

Username: brennen@gmail.com

Password: 111


Tech Used: <br />
-Javascript <br />
-React <br />
-reactstrap <br />
-bootstrap <br />
-JSON server <br />
-Cloudinary <br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
