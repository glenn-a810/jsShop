import { useParams } from "react-router-dom";

function Detail(props) {
  const {id} = useParams()

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={props.food[id].img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.food[id].title}</h4>
            <p>{props.food[id].content}</p>
            <p>{props.food[id].price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
  )
}

export default Detail
