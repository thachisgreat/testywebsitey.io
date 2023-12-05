function checkField(Field) {
    if (Field == null) {
        return false
    } else {
        return true
    }
}
function checkLength(field) {
    if (field.length < 5) {
        return true
    } else {
        return false
    }
}
function checkMail(field) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
        return (true)
    }
    return (false)
}
function checkAddress(field) {
    if (field.length < 18) {
        return false
    } else {
        return true
    }
    function checkAddress(Field) {
        if (Field == null) {
            return false
        } else {
            return true
        }
    }
}

function checkRegister() {
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value


    if (checkField(username) == false) {
        alert('Ya missing something')
        return
    } else if (checkMail(email) == false) {
        alert('Email is wrong bud')
    } else if (checkAddress(address) == false) {
        alert('Address is wrong bud')
    } else if ((checkField(address)) == false && (checkField(email)) == false && (checkField(username) == false)) {
        alert('You didnt type anything in, why are you here?')
    }
    else {
        alert('Welcome!')
        return
    }
}
