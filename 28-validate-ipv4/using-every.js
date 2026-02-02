function validateIPv4(ip) {
  const octets = ip.split('.');

  if (octets.length !== 4) return false;

  return octets.every(octet => {
    if (octet === '') return false;

    // leading zero check
    if (octet.length > 1 && octet.startsWith('0')) return false;
    
    const num = Number(octet);

    return Number.isInteger(num) && num >= 0 && num <= 255;
  });
}
