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


    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{            
    //     console.log(result);
    // }, (err) => {   
    //     console.log(err);
    // })

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{ 
    //     console.log(result);

    // }, (err) => {
    //     console.log(err);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'ali'}).then((result) =>{
    //     console.log(result);
    // }); 

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5cf031ab1c36978faa72ff2d')}).then((result) =>{
        console.log(result);
    })

    client.close();
} );

