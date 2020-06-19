// CRUD opertations
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useUnifiedTopology :true }, (error,client) =>{
      if(error){
            return console.log("Unable to connect databae")
      }
      const db = client.db(databaseName)
      //1. Create Collection
      // db.collection('users').insertOne({
      //       _id:id,
      //       name:'Sweta',
      //       age:20
      // }, (error ,result) => {
      //       if(error){
      //             return console.log("Unable to insert")
      //       }
      //       else{
      //             console.log(result.ops)
      //       }
      // })

      // db.collection('users').insertMany([{
      //       name:'Aadhyashree',
      //       age:28
      // },{
      //       name:'harsha',
      //       age:21
      // }] , (error ,result) => {
      //       if(error){
      //             return console.log("Unable to Insert")
      //       }
      //       console.log(result.ops)

      // })
      // db.collection('tasks').insertMany([
      //       {
      //             description:'VVP',
      //             completed:true
      //       },{
      //             description:'Engineering',
      //             completed:false
      //       },
      //       {
      //             description:'College',
      //             completed:false
      //       }
      // ], (error , result) =>{
      //       if(error){
      //             return console.log("Unable to add data")
      //       }

      //       console.log(result.ops)
      // })


      //2. Read from Collections
      //2.0 Return only one matching value
      // db.collection('users').findOne({ name: 'Aadhyashree'},(error,user) =>{
      //       if(error){
      //             return console.log("Unable to fetch data")
      //       }
      //       console.log(user)
      // })
      //2.1 Multiple value from database 
      // db.collection('users').find({ age: 20}).toArray((error,users)=>{
      //       console.log(users)
      // })
      // //2.2 count how many data whose age is 20
      // db.collection('users').find({ age: 20}).count((error,users)=>{
      //       console.log(users)
      // })

      // db.collection('tasks').findOne({_id: new ObjectID("5ee710bc1cbc1b695a1a7412")},(error,task) =>{
      //       if(error){
      //             return console.log("Unable to fetch data")
      //       }
      //       console.log(task)
      // })

      // db.collection('tasks').find({ completed: false}).toArray((error,tasks)=>{
      //       console.log(tasks)
      // })

      //3. Update Database
      //3.1 Update value using set and updateOne
      // db.collection('users').updateOne({_id : new ObjectID("5ee70a053e7bdb671f06b20c")},
      // {
      //       $set:{
      //             name:'Vishwa'
      //       }
      // }).then((result)=>{
      //       console.log(result)
      // }).catch((error) =>{
      //             console.log(error)
      // })
      // //3.2 update the age using inc(increment) 
      // db.collection('users').updateOne({_id : new ObjectID("5ee70a053e7bdb671f06b20c")},
      // {
      //      $inc:{
      //            age:-4
      //      }
      // }).then((result)=>{
      //       console.log(result)
      // }).catch((error) =>{
      //             console.log(error)
      // })

      //3.3 Update many values in tables
      // db.collection('tasks').updateMany({
      //       completed:false
      // },{
      //       $set:{
      //             completed:true
      //       }
      // }).then((result) =>{
      //       console.log(result.modifiedCount)
      // }).catch((error)=>{
      //       console.log(error)
      // })

      //4 Delete Values
      //4.1 Delete values using deleteMany 
      // db.collection('users').deleteMany({
      //       age:20
      // }).then((result) =>{
      //       console.log(result)
      // }).catch((error)=>{
      //       console.log(error)
      // })
      // //Delete one using deleteOne
      // db.collection('tasks').deleteOne({
      //       description:'Engineering'
      // }).then((result) =>{
      //       console.log(result)
      // }).catch((error)=>{
      //       console.log(error)
      // })
})

