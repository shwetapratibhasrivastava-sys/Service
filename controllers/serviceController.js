import Service from "../models/seviceModel.js";

export const createService = async (req, res) => {
  try {
    const { name, description} = req.body;

    if (!name || !description ) {
      return res.json({
        message: "All fields are required",
      });
    }

    const existingService = await Service.findOne({ name });

    if (existingService) {
      return res.json({
        message: "This service already exists...",
        data: existingService,
      });
    }

    const service = await Service.create({ name, description });

    res.status(200).json({
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const getService = async (req, res) => {
  try {
    const service = await Service.find();
    res.json(service);
  } catch (error) {
    res.json(error.message);
  }
};

export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.json(service);
  } catch (error) {
    res.json(error.message);
  }
};



export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted", data: service });
  } catch (error) {
    res.json(error.message);
  }
};


















export const updateService=async(req,res)=>{
     try {
      if (!name||!description){
        return res.json({
          message:"All fields are required"
        })
      }
      
      const service=await Service.findByIdAndUpdate(req.params.id,req.body,{
        new:true
      })
      res.json({
        message:"Service updated",
        data:service
      })
      console.log("message",service)
     } catch (error) {
       req.json(error.message)
     }

}



