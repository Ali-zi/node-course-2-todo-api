//const MongoClient = require('mongodb').MongoClient;
// identical to line above, uses destructuring in es6
const {MongoClient, ObjectID} = require('mongodb');


//Destructuring in es6
// var user = {name:'andry', age:25};

// var {age} = user;
// console.log(age);

// var obj = new ObjectID();

// console.log("Object id " ,obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count )=> {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch to dos', err);
    // });

    db.collection('Users').find({name: 'ali'}).toArray().then((docs)=> {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    })
    // db.collection('Todos').find({
    //     _id: new ObjectID('5ced8860ac254b11e005dabd') 
    // }).toArray().then((docs )=> {
    //     console.log('Todo');
    //     console.log(JSON.stringify(docs,undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch to dos', err);
    // });
    
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos : ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
    // }, (err) => {
    //     console.log('Unable to fetch todos ', err);
    // });



    client.close();
} );

