import * as React from 'react';

interface HelloWorldState {
  buttonClicked: boolean;
}

class HelloWorld extends React.Component<void, HelloWorldState> {
  constructor(props: any) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  render() {
    return (
      <div>
        <h1>HI WORLD HIIIII</h1>
        <button>BUTTON CLICK ME</button>
      </div>
    );
  }
}

export default HelloWorld;