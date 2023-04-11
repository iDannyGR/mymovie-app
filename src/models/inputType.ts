enum Input {
    TEXT="text",
    EMAIL="email",
    IMAGE="image",
    PASSWORD="password",
}

enum ButtonType{
    BUTTON ="button",
    SUBMIT="submit"
}

export {Input, ButtonType}

// nameId, label, inputType (este es un enum), 
// value, placeholder, children (opcional), 
// errorMessage (opcional), error (opcional), 
// onChange y onBlur (opcional)