function validateIPv4(ip) {
  const octets = ip.split('.');

  if (octets.length !== 4) return false;

  for (const octet of octets) {

    // empty string check (e.g. "192..1.1")
    if (octet === '') return false;

    const num = Number(octet);

    // must be an integer number
    if (!Number.isInteger(num)) return false;

    // IPv4 range: 1–255
    if (num < 1 || num > 255) return false;

    // leading zero check
    if (octet.length > 1 && octet.startsWith('0')) return false;
  }

  return true;
}
