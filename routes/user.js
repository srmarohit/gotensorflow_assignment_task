const { authorization, admin } = require("../middleware");
const upload = require("../multer/index");

const router = require("express").Router();

const userController = require("../controller/user");

router.get("/exportcsv", userController().exportCSV);

router.put("/:id", userController().updateUser);

router.delete("/:id", userController().deleteUser);

router.get("/:id", userController().getUser);

router.get("/", userController().getAllUsers);

module.exports = router;
