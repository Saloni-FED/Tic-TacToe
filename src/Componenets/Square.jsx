const Square = (props)=>{
    return <><h1 className='h1-square'onClick={props.onSquareClicked}>{props.value}</h1>
    </>
}
export default Square;