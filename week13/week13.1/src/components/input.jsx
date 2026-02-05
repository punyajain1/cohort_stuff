export function Input({ onclick, type, placeholder }) {
    return (
           <span onClick={onclick} className={`rounded-2xl text-4xl m-4 px-2 py-2 cursor-pointer bg-blue-200`}>
                <input type={type} placeholder={placeholder} className=" bg-blue-200 outline-none " />
            </span>
    );
}
