import {
    createCartServ,
    getCartServ,
    addProdTocartServ,
    delProdFromCartServ,
  } from "../services/carts.service.js";

  export const getCartCtll = async (req, res, next) => {
    try {
      const { cId } = req.params;
      const doc = await getCartServ(Number(cId));
      res.status(200).json(doc);
    } catch (error) {
      next(error);
    }
  };