const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { log } = require("firebase-functions/logger");
const cors = require("cors")({ origin: true });

/**
 * Update user identification data
 * @param body {String,Object}
 * @return{string} message succes|error
 * @forplay  https://us-central1-ecole-sainte-marguerite.cloudfunctions.net/updateUser
 */

exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;
  console.log(uid);

  return cors(req, res, async () => {
    try {
      const userRecord = await admin.auth().updateUser(uid, data);
      res.send(userRecord.toJSON());
    } catch (error) {
      res.status(500).send(error);
    }
  });
});
