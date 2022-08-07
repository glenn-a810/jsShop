const Item = (props) => {
  return (
      <div>
        {/*<img src={props.img} width='80%' />*/}
        <h4>{ props.food[0].title }</h4>
        {/*<p>{ props.content }</p>*/}
        {/*<p>{ props.price }</p>*/}
      </div>
  )
}

export default Item
