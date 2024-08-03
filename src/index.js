export default class Validator {
validateUsername(username) {
    const re = /^[a-zA-Z](?!.*\d{4})(?!.*[-_]$)[\w-]*[a-zA-Z\d]$/;
    return re.test(username);
}
}