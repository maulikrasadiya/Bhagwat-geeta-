const userModel = require('../modules/module')
var data = [];

const defaultRoute = (req,res) => {

    res.render('index');

};

const addDoc = (req, res) => {

    console.log(req.body, req.file);

    let book = new userModel({
        book: req.body.book,
        name: req.body.name,
        page: req.body.page,

    });

    book.save();
    res.redirect('/');
}

const viewData =async (req,res) => {
    try {
        var data = await userModel.find();
        res.render("view", { data })
    } catch (err) {
        console.log("Errer");
    }
};

const editDoc = async (req , res) => {


    console.log(req.params.id);
    try{

        let editData = await userModel.findById(req.params.id);
        console.log(editData);
        res.render('edit',{editData});
    }catch(err){
        console.log(err);
    }

    
}

const updateDoc = async (req,res) => {
    

    console.log(req.body);
    try{
        const {id,book,name,page} = req.body;
        let updated = await userModel.findByIdAndUpdate(id , {book:book , name:name , page:page})
        res.redirect('/view');
    }catch(err){
        console.log(err);
    }

}

const deleteDoc = async (req,res) => {

 
    const deleted = await userModel.findByIdAndDelete(req.params.id);
    res.redirect('/view');

}

module.exports = {defaultRoute,addDoc,viewData,editDoc,deleteDoc,updateDoc}