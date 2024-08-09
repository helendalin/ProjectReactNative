
function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (values.email === "") {
        error.email = "Email shouldn't be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match";
    }

    if (values.password === "") {
        error.password = "Password shouldn't be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match";
    }

    return error;
}

export default validation;
