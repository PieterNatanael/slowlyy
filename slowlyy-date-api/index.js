const express = require('express');
const crypto = require('crypto');
const app = express();
const port = process.env.PORT || 8080;

const SECRET = process.env.HMAC_SECRET || 'your_shared_secret';

app.get('/date', (req, res) => {
    const clientTimestamp = req.headers['x-timestamp'];
    const clientSignature = req.headers['x-signature'];

    if (!clientTimestamp || !clientSignature) {
        return res.status(401).json({ error: 'Missing headers' });
    }

    const expectedSignature = crypto
        .createHmac('sha256', SECRET)
        .update(clientTimestamp)
        .digest('hex');

    if (!crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(clientSignature))) {
        return res.status(403).json({ error: 'Invalid signature' });
    }

    const now = new Date().toISOString();
    res.json({ date: now });
});

app.listen(port, () => {
    console.log(`Slowlyy date API listening on port ${port}`);
});
