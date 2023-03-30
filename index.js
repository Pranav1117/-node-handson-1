const http=require("http");

const server=http.createServer((req,res)=>{
res.setHeader('Content-Type', 'application/json');

res.write(JSON.stringify({massage :"Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language."
}))



res.end()


server.listen(3000, () => {
    console.log('Server is running');
})})