const curryDeepObjectAccessor = (obj = {}, def = null) => path => path
    .split('.')
    // Con "nullish coaleshing operator" se podría realizar una sentencia más sencilla
    .reduce((acc, partial) => acc && acc[partial] ? acc[partial] : def, obj);

export const kata2 = (obj, def, path) => path ?
    curryDeepObjectAccessor(obj, def)(path) :
    curryDeepObjectAccessor(obj, def);