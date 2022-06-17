const jsonToCSV = require("../JSON2CSV");
const User = require("../models/User");

module.exports = () => {
  return {
    updateUser: async (req, res) => {
      console.log("update data " + JSON.stringify(req.body));

      try {
        const updateUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updateUser);
      } catch (e) {
        res.status(500).json(e);
      }
    },

    deleteUser: async (req, res) => {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user hasbeen deleted ..");
      } catch (e) {
        res.status(500).json(e);
      }
    },

    // GEt User
    getUser: async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
      } catch (e) {
        res.status(500).json(e);
      }
    },

    // GEt ALL USERS
    getAllUsers: async (req, res) => {
      try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (e) {
        res.status(500).json(e);
      }
    },

    // export ALL users in csv file
    exportCSV: async (req, res) => {
      try {
        const users = await User.find();
        let csv = jsonToCSV(users);
        res.status(200).send(csv);
      } catch (e) {
        res.status(500).json(e);
      }
    },
  };
};
