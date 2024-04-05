export function sendResponse(success, message, data, res) {
        return res.send({
            sessionDTO: {
                "status": success,
                "reasonCode": (success == true) ? 'success' : 'failure'
            }
            , status: success
            , message: (message == null) ? (success == true) ? 'Success' : 'Failure' : message
            , responseObject: data
        })
    };
   