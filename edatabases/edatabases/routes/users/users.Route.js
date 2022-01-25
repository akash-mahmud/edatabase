const express = require('express');
const { userControllers} = require('../../controller/index');
const { upload } = require('../../middleware/upload.file');
const routes = express.Router();


routes.post("/register", userControllers.isRegister)
routes.post("/verifyAccount", userControllers.verifyAccount)
routes.post("/register_detail", userControllers.registerDetail)
routes.post("/upload_photos",upload.array('photos',4), userControllers.uploadPhotos)
routes.post("/company_detail", userControllers.company_detail)
routes.post("/add_project", userControllers.add_project)
routes.get("/all", userControllers.getAllUsers)


routes.post("/states/:countryId", userControllers.addStates)
routes.post("/cities/:stateId", userControllers.addStatesByCities)
routes.get("/states/:countryId", userControllers.getStates)
routes.get("/cities/:stateId", userControllers.getStatesByCities)


routes.post("/companies/:userId", userControllers.getCompiesByUserID)


module.exports = routes
