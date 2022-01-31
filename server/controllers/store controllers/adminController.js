const Admin = require('../../models/admin');
const jwt = require('jsonwebtoken');

const create = (admin)=>Admin.create(admin);

const login = async({username, password}, next)=>{
    const admin = Admin.findOne({username});
    if(!admin){
        next(`invalid username`) 
        return;
      }
      const isValid = await admin.comparePassword(password);
  
      if(!isValid){
        next(`invalid password`) 
        return;
      }
      
      return jwt.sign(
          {
            username,
            _id: admin._id,
            maxAge: "2d",
          },
          process.env.SECRET
        );
}



module.exports = {create, login};
