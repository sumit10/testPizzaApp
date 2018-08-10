exports.apiError = (res,error,status) => {
    console.log((error.stack)?error.stack:error);
    res.status(status || 500)
    if(process.env.NODE_ENV !== "production"){
        if(typeof error === "string"){
            res.send({error:error})
        }else{
            res.send(error);
        }
    }else{
        // Not to show error on production
        res.send("Something went worng");
    }
}

