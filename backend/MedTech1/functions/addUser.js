// Create User endpoint

app.post('/users', function (req, res) {

    const { userId, name } = req.body;
  
    if (typeof userId !== 'string') {
  
      res.status(400).json({ error: '"userId" must be a string' });
  
    } else if (typeof name !== 'string') {
  
      res.status(400).json({ error: '"name" must be a string' });
  
    }
  
  
    const params = {
  
      TableName: USERS_TABLE,
  
      Item: {
  
        userId: userId,
  
        name: name,
  
      },
  
    };
  
  
    db.put(params, (error) => {
  
      if (error) {
  
        console.log(error);
  
        res.status(400).json({ error: 'Could not create user' });
  
      }
  
      res.json({ userId, name });
  
    });
  
  })
  
  
  module.exports.handler = serverless(app);