<<<<<<< HEAD
const axios = require("axios");

const usgs_url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;

const getQuakes = async () => {
    const response = await axios.get(usgs_url);
    const quake = response.data.features[0].properties;
    return quake;
};

const sendSlack = async (quake) => {
    const message = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `:zap: *Earthquake!*\n\n There was a Magnitude ${quake.mag} earthquake ${quake.place}. <${quake.url}|Here's the USGS link.>`,
                },
            },
        ],
    };

    axios
        .post(SLACK_WEBHOOK, message)
        .then((res) => {
            console.log(`Slack message sent! Status Code: ${res.status}`);
        })
        .catch((error) => {
            console.error(error);
        });
};

getQuakes().then(sendSlack);
=======
const axios = require('axios');

const usgs_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;

const getQuakes = async () => {    
    const response = await axios.get(usgs_url)
    const quake = response.data.features[0].properties
    return quake
}


const sendSlack = async (quake) => {

    const message = {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:zap: *Earthquake!*\n\n There was a ${quake.mag} earthquake near ${quake.place}. <${quake.url}|Here's the USGS link.>`
                }
            },
        ]

    }    

    axios.post(SLACK_WEBHOOK, message)
        .then( res => {
            console.log(`Slack message sent! Status Code: ${res.status}`)
        })
        .catch(error => {
            console.error(error)
        })
    
}

getQuakes()
    .then(sendSlack)
>>>>>>> glitch
