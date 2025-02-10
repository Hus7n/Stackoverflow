import { Hono } from 'hono'

const app = new Hono()
//user
// User registration
app.post('/api/v1/user/signup', (c) => {
  return c.text('signup')
})
//User login
app.post('/api/v1/user/signin', (c) => {
  return c.text('signin')
})
// User logout
app.post('/api/v1/user/signout', (c) => {
  return c.text('signout')
})

//answer

//Get an answer
app.get('/api/v1/answers/:id', (c) => {
  return c.text('ans id')
})
// Post an answer
app.post('/api/v1/answers', (c) => {
  return c.text('ans')
})
//Update an answer
app.put('/api/v1/answers/:id', (c) => {
  return c.text('update ans')
})
//Delete an answer
app.delete('/api/v1/answers/:id', (c) => {
  return c.text('delete ans')
})

//question

// Get all questions
app.get('/api/v1/questions', (c) => {
  return c.text('q')
})
//Get a specific question
app.get('/api/v1/questions/:id', (c) => {
  return c.text('q id')
})
//Post a new question
app.post('/api/v1/questions', (c) => {
  return c.text('post q')
})
//Update a question
app.put('/api/v1/questions/:id', (c) => {
  return c.text('update q')
})
// Delete a question
app.delete('/api/v1/questions/:id', (c) => {
  return c.text('delete q')
})
export default app
