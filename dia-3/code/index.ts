
function genereateError(message: string, code: number) {
    throw{message: message, errorCode: code}
}

genereateError('errormaiidajsi', 505)