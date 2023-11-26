import { S3 } from "aws-sdk"
import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';

const s3 = new S3();

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    try {
        console.log(event);
        const objects = await s3.listObjectsV2({ Bucket: 'wrec-er' }).promise();
        console.log(objects);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello World",
                data: objects
            })
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal Server Error"
            })
        };
    }
};