import {atom, selector} from "recoil";


export const counterAtom = atom({
    key:"counter",
    default:0
});


export const isEven = selector({
    key:"isevenselector",
    get:function({get}){
        const curr= get(counterAtom);
        return curr%2 ==0;
    }
})