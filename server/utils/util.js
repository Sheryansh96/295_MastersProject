const aws =  require('aws-sdk');
require('dotenv').config();

exports.invokeSageMakerEndpoint = async(EndpointName, body, callback) => {
  
        aws.config.update({
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    
        const SageMakerRuntime = new aws.SageMakerRuntime();
    
        const params = {
            Body: JSON.stringify(body),
            EndpointName: EndpointName,
            ContentType: "application/json"
        };
    
        SageMakerRuntime.invokeEndpoint(params, function(err, data) {
            if (err){
                callback(err, null);
                }
            else{
                result = data.Body.toString('utf-8');
                callback(null, result);
            }
        });    
};