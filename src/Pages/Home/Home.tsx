import * as React from "react";
import "./styles.css";

interface Props {}
interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="Test">
        <p className="Test_content">Test</p>
      </div>
    );
  }
}

export default Home;
