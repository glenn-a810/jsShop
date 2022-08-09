import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(props) {
  const {id} = useParams()
  const [alert, setAlert] = useState(true)
  const [num, setNum] = useState('')

  useEffect(()=>{
    if ( isNaN(num) === true ) {
      alert('숫자만 입력가능합니다.')
    }
  }, [num])

  return (
      <div className="container">
        {
          alert===true?<div className='alert alert-warning'>
            2초 이내 구매시 할인
          </div>:null
        }

        <div className="row">
          <div className="col-md-6">
            <img src={props.food[id].img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.food[id].title}</h4>
            <p>{props.food[id].content}</p>
            <p>{props.food[id].price}원</p>
            <p><input onChange={(e)=>{ setNum(e.target.value) }}/></p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
  )
}

export default Detail
