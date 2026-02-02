/**
 * Validates whether a given string is a valid IPv4 address.
 *
 * An IPv4 address consists of four octets separated by dots (.), where:
 * - The address must contain exactly four octets
 * - Each octet must be a number
 * - Should not contain leading zeros
 * - Each octet is a number between 1 and 255
 *
 * @param {string} ip - The IP address string to validate.
 */

function validateIPv4(ip) {

    const octets = ip.split('.');

    if (octets.length !== 4) {
        return false;
    }
    for (const octet of octets) {
        const num = Number(octet);
        if (
            isNaN(num) ||
            num < 1 ||
            num > 255 ||
            (octet.length > 1 && octet.startsWith('0'))
        ) {
            return false;
        }
    }
    return true;
}

console.log(validateIPv4("192..1.1"
)); // false
    