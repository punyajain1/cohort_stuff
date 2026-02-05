
export function Button({disable , onclick , children}){
    return (
        <>
    <span onClick={onclick} className={`rounded-2xl text-4xl px-32 py-8 cursor-pointer ${disable ? "bg-blue-200" : "bg-green-400"}`}>
        {children}
    </span>
</>

    )
}