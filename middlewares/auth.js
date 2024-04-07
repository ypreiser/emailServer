
async function auth(req,res,next){
    try{
            const user = req.body.user={_id:"660d393b749922a0500c326f"}
            console.log(user);
            next()
    }
    catch{
        res.sendStatus(401);
    }
}

module.exports = {auth}