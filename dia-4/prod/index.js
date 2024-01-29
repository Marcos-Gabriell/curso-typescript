"use strict";
function genereateError(message, code) {
    throw { message: message, errorCode: code };
}
genereateError('errormaiidajsi', 505);
