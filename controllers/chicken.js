const Chicken = require("../models/chicken");
const dotenv = require("dotenv");
dotenv.config();

const MY_APP_USER = process.env.APP_USER;

exports.getChickens = (req, res, next) => {
  Chicken.find()
    .then((chickens) => res.status(200).json(chickens))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneChicken = (req, res, next) => {
  Chicken.find({ _id: req.params.id })
    .then((chicken) => res.status(200).json(chicken))
    .catch((error) => res.status(404).json({ error }));
};

exports.addChicken = (req, res, next) => {
  const chicken = new Chicken({
    userId: MY_APP_USER,
    ...req.body,
  });
  chicken
    .save()
    .then(() =>
      res.status(201).json({
        message: "Objet enregistré !",
        objet: {
          userId: MY_APP_USER,
          ...req.body,
        },
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteChicken = (req, res, next) => {
  Chicken.findOne({ _id: req.params.id })
    .then((chicken) => {
      if (!chicken) {
        return res.status(404).json({ error: new Error("Objet non trouvé!") });
      }
      Chicken.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.modifyChicken = (req, res, next) => {
  const chickenObject = { ...req.body };
  Chicken.findOne({ _id: req.params.id }).then((chicken) => {
    if (!chicken) {
      return res.status(404).json({ error: new Error("Objet non trouvé!") });
    }
    Chicken.updateOne(
      { _id: req.params.id },
      { ...chickenObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  });
};

exports.runChicken = (req, res, next) => {
  Chicken.findOne({ _id: req.params.id }).then((chicken) => {
    if (!chicken) {
      return res.status(404).json({ error: new Error("Objet non trouvé!") });
    }

    if (chicken.isRunning) {
      console.log(chicken);
      Chicken.updateOne({ _id: chicken._id }, { isRunning: false })
        .then(() =>
          res.status(200).json({
            message: "Objet modifié, the chicken is not running anymore !",
          })
        )
        .catch((error) => res.status(400).json({ error }));
    } else {
      Chicken.updateOne(
        { _id: req.params.id },
        { steps: chicken.steps + 1, isRunning: true }
      )
        .then(() =>
          res
            .status(200)
            .json({ message: "Objet modifié, the chicken is running !" })
        )
        .catch((error) => res.status(400).json({ error }));
    }
  });
};
