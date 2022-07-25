import { Component } from "react";

// extends는 그 class를 상속받는다는뜻(안의 모든 기능을 사용할 수 있다.)
// 우리는 react의 state같은 기능들을 사용하고 싶어서 component를 가져와보자
class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  counterUp = () => {
    this.setState({
      count: 5,
    });
  };

  render() {
    return (
      <>
        {/* this라는것은 본인 class를 의미한다  */}
        {/* counterUp을 화살표함수로 바꾸면 .bind(this)가 필요없다  */}
        <div>{this.state.count}</div>
        <button onClick={this.counterUp}>카운트 올리기 !! </button>
      </>
    );
  }
}

export default ClassCounterPage;
