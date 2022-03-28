const AdminServices= require("../services/AdminServices")


class AdminController{
   static async getAllClients(req, res, next){
    const clients= await AdminServices.serviceGetAllClients(next)
  return clients? res.status(200).json(clients): res.sendStatus(404)
    }



    static async getOneClient(req, res, next){
        const oneClient= await AdminServices.serviceGetOne(req, next)
      return  oneClient? res.status(200).json(oneClient): res.sendStatus(404)
    }


    static async getAllSecurities(req, res, next){
        const allSecurities= await AdminServices.serviceGetAllSecurities(next)
      return  allSecurities? res.status(200).json(allSecurities): res.sendStatus(404)

    }

    static async getOneSecurity(req, res, next){
        const oneSecurity= await AdminServices.serviceGetOneSecurities(req, next)
      return  oneSecurity? res.status(200).json(oneSecurity): res.sendStatus(404)
    }

    static async getAllOffice(req,res,next){
      const allOfficies= await AdminServices.serviceGetAllOffice(next)
      return   allOfficies? res.status(200).json( allOfficies): res.sendStatus(404)

    }

    static async getOneOffice(req, res, next){
      const oneOffice= await AdminServices.serviceGetOneOffice(req,next)
    return  oneOffice? res.status(200).json(oneOffice): res.sendStatus(404)
  }

  static async getOfficeCalendar(req,res,next){
    const officeCalendar= await AdminServices.serviceGetCalenderOffice(req, next)
    return officeCalendar? res.status(200).json(officeCalendar): res.sendStatus(404)
  }

    static async addSecurity(req,res,next){
      
        const office= await AdminServices.serviceAddSecurity(req, next)
        return office? res.status(200).json(office): res.sendStatus(500)
    }

    static async addOffice(req, res, next) {
      const newOffice = await  AdminServices.serviceAddOffice(req, next);
      return res.status(201).json(newOffice);
    }

    static async addClient(req, res, next) {
     
      const newClient = await  AdminServices.serviceAddClient(req,next)
      return newClient? res.status(201).json( newClient ): res.sendStatus(404)
    }

    static async addSchedule(req,res,next){
      await AdminServices.serviceAddSchedule(req,next)
      return res.sendStatus(201)
    }

    static async removeOffice(req, res, next){
    await  AdminServices.serviceRemoveOffice(req, next)
    return res.sendStatus(202)
    }
   
    static async removeSecurity(req, res, next){
      await  AdminServices.serviceRemoveSecurity(req, next)
    return res.sendStatus(202)
    }

    static async removeClient(req, res, next){
      await  AdminServices.serviceRemoveClient(req, next)
      return res.sendStatus(202)

    }

    static async removeSchedule(req, res, next){
    await AdminServices.serviceRemoveSchedule(req, next)
    return res.sendStatus(202)
    }

    static async editOffice(req,res, next){
      const updatedOffice= await AdminServices.serviceEditOffice(req, next)
      return res.staus(201).json(updatedOffice)
    }

    static async editSecurity(req,res, next){
      const updatedSecurity= await AdminServices.serviceEditSecurity(req, next)
      return res.staus(201).json( updatedSecurity)
    }

    static async editClient(req, res, next){
      const updatedClient= await AdminServices.serviceEditClient(req, next)
      return res.staus(201).json(updatedClient)
    }
  
}

module.exports = AdminController;