const Chicken = require("../models/chicken");
const dotenv = require("dotenv");
dotenv.config();

const MY_APP_USER = process.env.APP_USER;

exports.getChickens = (req, res, next) => {
  Chicken.find()
    .then((chickens) => res.status(200).json(chickens))
    .catch((error) => res.status(400).json({ error }));
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
