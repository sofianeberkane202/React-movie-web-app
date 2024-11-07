export default function Massage({
    text,
    classStyle
}){
    return (
    <p className={classStyle}>
        {text}
    </p>
    )
}