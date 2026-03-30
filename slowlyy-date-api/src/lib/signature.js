const crypto = require('crypto');

const SECRET = process.env.HMAC_SECRET || 'your_shared_secret';

function buildSignature(value) {
  return crypto.createHmac('sha256', SECRET).update(value).digest('hex');
}

function isValidSignature(value, signature) {
  const expectedSignature = buildSignature(value);

  if (expectedSignature.length !== signature.length) {
    return false;
  }

  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature),
    Buffer.from(signature)
  );
}

module.exports = {
  isValidSignature,
};
