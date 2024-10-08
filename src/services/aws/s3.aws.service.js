import AWS from './aws.service';

const S3Service = {
    listObjects: async (prefix = null) => {
        const s3 = new AWS.S3();
        const bucketParams = { Bucket: process.env.BUCKET_NAME || 'rec-er', Prefix: prefix };
        const response = await s3.listObjects(bucketParams).promise();
        return response.Contents.map(file => file.Key);
    },
    getObject: async (fileName) => {
        const s3 = new AWS.S3();
        const bucketParams = { Bucket: process.env.BUCKET_NAME || 'rec-er', Key: fileName };
        const response = await s3.getObject(bucketParams).promise();
        return response;
    }
}

export default S3Service;