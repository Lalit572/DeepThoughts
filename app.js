const express = require('express');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Testdata';

// Create the Express application
const app = express();

// Parse JSON request bodies
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));


// Route handler for the POST request
app.post('/api/v3/app/events', async (req, res) => {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const eventData = req.body; // Assuming you're sending the data in the request body

    // Insert the event data into the collection
    const insert = await collection.insertOne(eventData);
    console.log('Inserted document =>', insert);

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  }
});


// Route handler for the GET request
app.get('/api/v3/app/events', async (req, res) => {

  const { id, type, limit, page } = req.query;
  
  //if user gives id as parameter then this code will excecute

  if(id)
  {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  try {
    const result = await collection.findOne({ _id: id });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  }
}


//if user gives type,limit,page as parameters then this code will excecute.
else
{
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  try {
    const query = {
      type: type
    };

    const totalCount = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalCount/parseInt(limit)
    
    );

    const documents = await collection.find(query)
    .sort({_id:-1})
    .skip((page - 1) * parseInt(limit))
    .limit(parseInt(limit))
    .toArray();

    res.json({
      page,
      totalPages,
      data: documents
    });

  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  } 
}
});


// Route handler for the PUT request
app.put('/api/v3/app/events/:id', async (req,res)=>{

  const id = req.params.id;
  const event = req.body;

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  try{

    const { _id, ...updatedEvent } = event;

    const updates = await collection.findOneAndUpdate({ _id : id },{$set:updatedEvent},{returnOriginal: false})
    if(updates)
    {
      res.status(201).json({ message: 'Data Updated Sucesfully!' });
    }
    else{
      res.status(404).json({ message: 'Event not found' });
    }

  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  }

})


// Route handler for the DELETE request
app.delete('/api/v3/app/events/:id', async (req,res)=>{

  const id = req.params.id;

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  try {
    const result = await collection.deleteOne({ _id: id });
    if (result) {
      res.status(201).json({ message: 'Deleted Sucesfully!' });
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  }
})


// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
