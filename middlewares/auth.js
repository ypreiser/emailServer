
async function auth(req,res,next){
    try{
            req.body.user={_id:"660d393b749922a0500c326f"}
            next()
    }
    catch{
        res.sendStatus(401);
    }
}

module.exports = {auth}