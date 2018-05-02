
exports.medium = function(event, context, callback) {
    console.log('medium');
    callback(null, {
    statusCode: 200,
    body: "Hello, World"
    });
}