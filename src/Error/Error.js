import warning from "../img/warning.png";
import "./Error.css";
import Link from "../Style-Component/Link";

const Error = () => {
  return (
    <div className="Error">
      <img src={warning} />
      <h3>네트워크 연결 실패</h3>

      <div className="frame">
        <h4>네트워크 연결에 실패하였습니다.</h4>
        <h4>확인 후 다시 시도해 주세요.</h4>
      </div>
      <button>
        <Link to="/">돌아가기</Link>
      </button>
    </div>
  );
};

export default Error;
