const express = require('express')
const router = express.Router()
const groupCtrl = require("../controller/groupCtrl")

router.post("/", groupCtrl.addGroup)
router.get("/", groupCtrl.viewGroups)
router.delete("/:id", groupCtrl.delGroup)
router.patch("/:id", groupCtrl.updGroup)

module.exports = router