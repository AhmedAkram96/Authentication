var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  User = mongoose.model('User'),
  EMAIL_REGEX = require('../config').EMAIL_REGEX,
  jwt = require('jsonwebtoken'),
  Encryption = require('../utils/encryption');

  module.exports.register=function(req,res,next){
      var valid = req.body.username && Validations.isString(req.body.username)
                && req.body.firstname && Validations.isString(req.body.firstname)
                && req.body.lastname && Validations.isString(req.body.lastname)
                && req.body.email && Validations.isString(req.body.email) && Validations.matchesRegex(req.body.email, EMAIL_REGEX)
                && req.body.password && Validations.isString(req.body.password) 
                && req.body.confirmpassword && Validations.isString(req.body.confirmpassword)


console.log(req.body.username)
console.log(req.body.firstname)
console.log(req.body.lastname)
console.log(req.body.email)
console.log(req.body.password)
console.log(req.body.confirmpassword)


     if(!valid){
         return res.status(422).json({
             err:null,
             msg: 'email(String and of valid email format), password(String) and confirmPassword(String) are required fields.',
            data:null
         })
                } 
         
    var password = req.body.password.trim();
          
    if(password !== req.body.confirmpassword.trim()){
        return res.status(422).json({
            err:null,
            msg:'passwords do not match',
            data:null
        })
    }

    if(password < 8){
        return res.status(422).json({
            err:null,
            msg:'password s less than 8 characters',
            data:null
        })  
    }


        User.findOne({$or:[ {email: req.body.email.trim().toLowerCase()},{username:req.body.username.trim().toLowerCase()} ] }).exec(function(err, user) {
            if(err){
                return next(err);
            }
            if(user){
                return res.status(422).json({
                    err:null,
                    msg:'there is already a user registered with this email or username',
                    data:null,
                })
            }   

            Encryption.hashPassword(password , function(err, hash){
                if(err){
                    return next(err);
                }
                req.body.password=hash

                User.create(req.body , function(err,newuser){
                    console.log("hna 3")

                    if(err){
                        return next(err+"here")
                    }
                    res.status(201).json({
                        err:null,
                        msg:"the user is registered successfully",
                        data:newuser.toObject()
                    })
            })

            })
        })     
 }

 module.exports.login=function(req,res,next){

var valid = req.body.email && Validations.isString(req.body.email) && Validations.matchesRegex(req.body.email, EMAIL_REGEX)
            && req.body.password && Validations.isString(req.body.password);
            
if(!valid){
    return res.status(422).json({
        err:null,
        msg:"email and password are Required fields",
        data:null
    })
    }


    User.findOne({email:req.body.email}).exec(function (err,user){
        if(err){
            return next(err);
        }
        if(!user){
        return res.status(404).json({
            err: null,
            msg: "no user is found with this email",
            data:null
        })
        }
        else{
            Encryption.comparePasswordToHash(req.body.password, user.password, function(err,match){
                if(err){
                    return next(err);
                }
                if(!match){
                    return res.status(401).json({
                        err:null,
                        msg:"password is incorrect",
                        data:null
                    })
                }
                else{
                    var token = jwt.sign({
                        user: user.toObject()
                    },
                    req.app.get('secret'),
                {
                    expiresIn: '9999999999999999999999999999999999999999999999999999999999999999999999999999999h'
                });

                return res.status(200).json({
                    err:null,
                    msg:"Logged in successfully",
                    data:token
                })
                }
            }
        )
        }
    }
    )
}
 