import {
    getAllServ,
    getByIdServ,
    createServ,
    updateServ,
    deleteServ,
  } from "../services/products.services.js";
  
  //viene peticion desde router y se deriva a service
  export const getAllCtll = async (req, res, next) => {
    try {
     const docs = await getAllServ();
     res.json(docs);
    } catch (error) {
      next(error);
    }
  };
  
  export const getByIdCtll = async (req, res, next) => {
    try {
      const { id } = req.params;
      const doc = await getByIdServ(id);
      res.json(doc);
    } catch (error) {
      next(error);
    }
  };
  //vinculado a dao de products
    export const createCtll = async (req, res, next) => {
    try {
      const { name, description, price, stock } = req.body;
      const newDoc = await createServ({
        name,
        description,
        price,
        stock
      });
      res.json(newDoc);
    } catch (error) {
      next(error);
    }
  };
  
  export const updateCtll = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, description, price, stock } = req.body;
      await getByIdServ(id);
      const docUpd = await updateServ(id, {
        name, description, price, stock
      });
      res.json(docUpd);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteCtll = async (req, res, next) => {
    try {
      const { id } = req.params;
      await deleteServ(id);
      res.json({message: 'Product deleted successfully!'})
    } catch (error) {
      next(error);
    }
  };
  