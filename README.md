# 1. NO_SQL

### Implement this task using MongoDB

### Clarification
- Convert your week-7-task database into a NOSQL DB using `MONGODB`. 
- Return the same information as specified from previous task.
- implement pagination, `with limit of 5 values for each page`
- Create Authentication and Authorization for users using a middleware function
- Implement Validation for incoming request using  **Joi**
- Only registered users can access all `endpoints`
- Use mongoDB-compass for local development
- data format:
```js
{
    previous:1,
    next:3,
    data:[
         { 
            organization: "node ninja", 
            createdAt: "2020-08-12T19:04:55.455Z", 
            updatedAt: "2020-08-12T19:04:55.455Z", 
            products: ["developers","pizza"], 
            marketValue: "90%", 
            address: "sangotedo", 
            ceo: "cn",  
            country: "Taiwan", 
            id: 2, 
            noOfEmployees:2, 
            employees:["james bond","jackie chan"] 
         } 
        ]
}

```

### Test Coverage (Test is mandatory - no test equals 0 (zero) marks):
- Test your database using mongodb-memory-server
- Test all endpoints `(GET, POST, PUT, DELETE)`


# 2. Mongo Aggregation Exercise.
- Go through the readme file in the Folder `MongoAggregation`
