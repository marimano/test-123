import fastify from "fastify";

const server = fastify();

server.get('/', (request, reply) => {
  reply.send('Hello!')
})

server.listen({ port: 5432 })
  .then(() => {
    console.log('Successfully started')
  })
  .catch(err => {
    console.error(err)
  })