module.exports = {
    connect: function(io, port){
        io.on('connection', (socket) => {
            console.log("user connection on " + port + ' : ' + socket.id);

            socket.on('message',(message)=>{
                io.emit('message',(message))
            })
        })
    }
}