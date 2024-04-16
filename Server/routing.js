const Formdetails = require('./Formdetails')



exports.getdetails=async(req,res)=>{
    try {
        const Form=await Formdetails.find()
        res.status(201).json({
            Form
        })
    } catch (error) {
        res.send(error)
    }
}
exports.getregister=async(req,res)=>{
    try{
            const Form= await Formdetails.findById(req.params.id)
            res.status(201).json({
                Form
            })
    }catch(error){
            res.send(error)
    }
}
exports.createregister=async(req,res)=>{
    try{
            const Form= await Formdetails.create(req.body)
            res.status(201).json({
                msg:"Created",
                data:Form
                })
        }catch(error){
                res.send(error)
        }
}
exports.updateregister=async(req,res)=>{
    try{
            const updateForm= await Formdetails.findByIdAndUpdate(req.params.id)
            res.status(201).json({
                updateForm
            })
    }catch(error){
            res.status(400).json({
                status:"Fail",
                msg:error
            })
    }
}
exports.deleteregister=async(req,res)=>{
    try{
            const deleteForm= await Formdetails.findByIdAndDelete(req.params.id)
            res.status(201).json({
                msg:"Deleted",
                deleteForm
            })
    }catch(error){
        res.status(400).json({
            status:"Fail",
            msg:error
        })
    }
}