const router = require("express").Router();
const generateTestController = require("../controller/generateTest");

router.get("/", generateTestController.getUnitTestPage);
router.get("/unit-test", generateTestController.getUnitTestPage);
router.post("/unit-test", generateTestController.generateUnitTest);
router.get("/integration-test", generateTestController.getIntegrationTestPage);
router.post(
  "/integration-test",
  generateTestController.generateIntegrationTest
);

module.exports = router;
