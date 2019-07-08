//const MongoClient = require('mongodb').MongoClient;
// identical to line above, uses destructuring in es6
const {MongoClient, ObjectID} = require('mongodb');


//Destructuring in es6
// var user = {name:'andry', age:25};

// var {age} = user;
// console.log(age);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'alita',
        age: 29,
        location: "not Zion bro"
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to todo', err);
        }
    });
    

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //    name: "ali",
    //    age: "29",
    //    location: "ottawack" 
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to add user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });


    client.close();
} );

