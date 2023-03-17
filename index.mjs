import fastify from "fastify";

const server = fastify();

server.listen({ port: 5432 })
  .then(() => {
    console.log('Successfully started')
  })
  .catch(err => {
    console.error(err)
  })