import Massage from "./message"
export default function Error({errorMassage}){
    return (
        <Massage
        text={errorMassage}
        classStyle="text-header mt-48 text-center mx-auto"
        />
    )
}