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
let params = {
    Image: {
        S3Object: {
            Bucket: 'awsrekognitiontest', // AWS Bucket name 
            Name: 'city.jpeg' // Image file name
        }
    },
    MaxLabels: 10,
    MinConfidence: 80
};