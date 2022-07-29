import locais from "../models/Local.js";

class LocalController {

  static listarLocais = (req, res) => {
    locais.find((err, locais) => {
      res.status(200).json(locais)
  })
  }

  static listarLocaisPorEstado = (req, res) => {
    const estado = req.query.estado

    locais.find({'estado': estado}, {}, (err, locais) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Busca não encontrada.`})
      } else {
        res.status(200).send(locais);
      }
    })
  }

  static listarLocalPorId = (req, res) => {
    const id = req.params.id;

    locais.findById(id, (err, locais) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id não localizado.`})
      } else {
        res.status(200).send(locais);
      }
    })
  }

  static cadastrarLocal = (req, res) => {
    let local = new locais(req.body);

    local.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao efetuar o cadastro.`})
      } else {
        res.status(201).send(local.toJSON())
      }
    })
  }

  static atualizarLocal = (req, res) => {
    const id = req.params.id;

    local.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Altualização realizada com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirLocal = (req, res) => {
    const id = req.params.id;

    locais.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Cadastro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default LocalController