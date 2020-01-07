import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Template from '../../layout';
import { CounterValue, OperationButtons, ChangeValueForm, ResetButtons } from '..';

const INITIAL_STATE = {
  value: 0,
  inputValue: '0',
};

class App extends Component {
  static propTypes = {
    maxValue: PropTypes.number,
  };

  static defaultProps = {
    maxValue: 10,
  };
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.updateCounter = this.updateCounter.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.maxValue !== this.props.maxValue) {
      return true;
    }
    if (nextState.value !== this.state.value) {
      return true;
    }
    if (nextState.inputValue !== this.state.inputValue) {
      return true;
    }
    return false;
  }

  updateCounter(e) {
    const { value } = e.target;
    this.setState(prevState => ({
      value: prevState.value + +value,
      inputValue: (prevState.value + +value).toString(),
    }));
  }

  updateInputValue(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }

  resetCounter() {
    this.setState(INITIAL_STATE);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      value: +prevState.inputValue,
    }));
  }

  render() {
    const { value, inputValue } = this.state;
    const { maxValue } = this.props;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        {value !== 10 && <CounterValue value={value} />}
        {value > maxValue * -1 && value < maxValue ? (
          <Fragment>
            <OperationButtons updateCounter={this.updateCounter} value={value} maxValue={maxValue} />
            <ChangeValueForm inputValue={inputValue} updateInputValue={this.updateInputValue} onSubmit={this.onSubmit} />
          </Fragment>
        ) : (
          <ResetButtons resetCounter={this.resetCounter} />
        )}
      </Template>
    );
  }
}

// class App2 extends Component {
//   state = INITIAL_STATE;

//   updateCounter = (e) => {
//     const { value } = e.target;
//     this.setState(prevState => ({
//       value: prevState.value + +value,
//     }));
//   };

//   resetCounter = () => {
//     this.setState(INITIAL_STATE);
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
//         <CounterValue value={value} />
//         {value > -10 && value < 10 ? <OperationButtons updateCounter={this.updateCounter} removeOne={this.removeOne} /> : <ResetButtons resetCounter={this.resetCounter} />}
//       </Template>
//     );
//   }
// }

export default App;
