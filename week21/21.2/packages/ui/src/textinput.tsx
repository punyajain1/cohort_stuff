
interface proptype{
    placeholder:string,
}

export function TextInput({placeholder }: proptype){
    return(
        <div>
            <input type="text" style={{
                padding:"10",
                margin:"10",
                borderColor:"black",
            }} placeholder={placeholder}></input>
        </div>
    )
}