const {Router} = require("express");
const controller = require("./controller");
const router = Router();

router.post('/calculate',controller.getDifferenceBtwTime)

module.exports = router;