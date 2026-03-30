const express = require('express');
const { isValidSignature } = require('../lib/signature');

const router = express.Router();

router.get('/', (req, res) => {
  const clientTimestamp = req.headers['x-timestamp'];
  const clientSignature = req.headers['x-signature'];

  if (!clientTimestamp || !clientSignature) {
    return res.status(401).json({ error: 'Missing headers' });
  }

  if (!isValidSignature(clientTimestamp, clientSignature)) {
    return res.status(403).json({ error: 'Invalid signature' });
  }

  return res.json({ date: new Date().toISOString() });
});

module.exports = router;
