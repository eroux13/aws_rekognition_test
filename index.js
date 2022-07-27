// Import required packages
const AWS = require('aws-sdk');

// Require env to hide access key
require('dotenv').config();

// AWS access details
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
});

// Input parameters
// Image will be stored in AWS S3 Bucket
let imgParams = {
    Image: {
        S3Object: {
            Bucket: 'awsrekognitiontest', // AWS Bucket name 
            Name: 'city.jpeg' // Image file name
        }
    },
    MaxLabels: 10,
    MinConfidence: 80
};

let textParams = {
    Image: {
        S3Object: {
            Bucket: 'awsrekognitiontest', // AWS Bucket name 
            Name: 'elon.jpg' // Image file name
        }
    }
};

// Call AWS Rekognition Class
const rekognition = new AWS.Rekognition();

// Detect Labels
rekognition.detectLabels(imgParams, function(err, data) {
    if(err) console.log(err); // show error during occurance
    else console.log(data); // show response
});

// Detect Text
rekognition.detectText(textParams, function(err, data) {
    if(err) console.log(err); // show error during occurance
    else console.log(data); // show response
});