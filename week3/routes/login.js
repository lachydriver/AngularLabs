module.exports = function(app,path){
    app.get('/',function(req,res){
        let filepath = path.resolve('./www/login.html');
        res.sendFile(filepath)
    })
}