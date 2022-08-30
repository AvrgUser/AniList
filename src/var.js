export let username_
export function setname(name){
    username_ = name
    onNameChange()
}
export let onNameChange = () => {return}
export let SetOnNameChangeListener = (listener)=>{
    onNameChange = listener
    listener()
}