/**
 * Validates an email address using a regular expression.
 * @param {string} mail - The email address to be validated.
 * @returns {boolean} - Returns true if the email address is valid, false otherwise.
 */
export const validateEmail = (mail: string): boolean => {
    if (!mail) return false;
    // The regular expression used to validate the email address.
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Test the email address against the regular expression.
    if (emailRegex.test(mail)) {
        // If the email address is valid, return true.
        return true;
    }

    // If the email address is invalid, return false.
    return false;
};
