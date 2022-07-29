import express from "express";
import locais from "./locaisRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Banco de Dados contendo locais disponíveis para armazenagem de grãos"})
    })

    app.use(
        express.json(),
        locais
    )
}

export default routes;