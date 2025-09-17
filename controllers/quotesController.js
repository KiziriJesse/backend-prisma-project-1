const getAllQuotes = (prismaClient)=>{

    return async (req, res) => {
        try {
            let quotes = await prismaClient.quote.findMany();
            res.send(quotes);
        } catch (error) {
            res.send(error)
        }
    }
}

const createAQuote = (prismaClient)=>{

    return async (req, res) => {
        try {
            let newQuote = await prismaClient.quote.create({
                data: {
                    text: "This is an example quote",
                    authorId: 1
                }    
            });
            res.send({message: "Successfully created the quote", newQuote});
        } catch (error) {
            res.send(error)
        }
    }
}


export {
    getAllQuotes,
    createAQuote
}