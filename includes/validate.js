function validate(login, password) {
    let errors = [];

    if (login.search("^[A-Za-z0-9]+$") == -1) errors.push("Логин должен содержать только латинские буквы и цифры")

    if (password.search("^[A-Za-z0-9]+$") == -1) errors.push("Пароль должен содержать только латинские буквы и цифры")

    if (password.length < 6) errors.push("Пароль должен быть не менее 6 символов")

    if (login.length < 3) errors.push("Логин должен быть не менее 3 символов")


    if (errors.length > 0) return errors
    else return false
}

module.exports = validate