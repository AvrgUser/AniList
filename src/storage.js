export const object = {
}

let onVarChange = []
export let SetOnVarChangeListener = (name, listener)=>{
    onVarChange[name] = listener
}
export function getVariable(variable){
    return object[variable]
}

export function setVariable(variable, data) {
    object[variable] = data
    if(onVarChange[variable]!= undefined){
        onVarChange[variable]()
    }
}