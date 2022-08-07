const Item = (props) => {
  return (
      <div className='col-md-4'>
        <img src={props.food.img} width='80%' />
        <h4>{ props.food.title }</h4>
        <p>{ props.food.content }</p>
        <p>{ props.food.price }원</p>
      </div>
  )
}

export default Item
