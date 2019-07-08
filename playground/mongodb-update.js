const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ced847fd92ac52e98666089')
    }, {
            $set: {
                name: 'Broseph'
            },
        
        
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    client.close();
});


    // db.collection('Users').findOneAndUpdate({_id: new ObjectID('5ced847fd92ac52e98666089')},
    // {
    //     $set: {
    //         name: 'Ali'
    //     }
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // },
    // {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("something went wront err: ", err);
    // });

//     db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5cf164e31c36978faa731345')
// },{
//     $set: {
//         completed:false
//     }
// }, {
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// },(err) => {
//     console.log(err);
// });

//     client.close();
// } );



// db.collection('Users').findOneAndUpdate({_id: new ObjectID('5ced847fd92ac52e98666089')
// }, {
//     $set: {
//         name: 'Ali'
//     }
// }, {
//     returnOriginal: false
// },{
//     $inc: {
//         age: 1

//     }
// }).then((result) => {
//     console.log(result);
// });