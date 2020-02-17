import * as React from "react";

interface Props {}

interface State {
  repeaterValue?: { [key: string]: string | number | undefined }[];
}

class Repeater extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      repeaterValue: [
        {
          name: "Expense 1",
          typeOfExpense: "",
          costOfExpense: undefined,
          dateOfExpense: ""
        }
      ]
    };
  }

  private addSet = () => {
    const values = this.state.repeaterValue
      ? this.state.repeaterValue.map(expense => expense)
      : [];
    values.push({
      name: `Expense ${values.length + 1}`,
      typeOfExpense: "",
      costOfExpense: undefined,
      dateOfExpense: ""
    });
    this.setState({
      repeaterValue: values
    });
  };

  private removeSet = (index: number) => {
    const values = this.state.repeaterValue
      ? this.state.repeaterValue.map(expense => expense)
      : [];
    values.splice(index, 1);
    console.log(values);

    this.setState({
      repeaterValue: values
    });
  };

  private onValueChange = (event: any, index: number) => {
    const { repeaterValue } = this.state;
    const typeName = event.target.name;
    const value = event.target.value;

    if (repeaterValue) {
      const newObj: { [key: string]: string | number } = {};
      newObj[typeName] = value;
      this.setState({
        repeaterValue: [
          ...repeaterValue.slice(0, index),
          Object.assign({}, repeaterValue[index], newObj),
          ...repeaterValue.slice(index + 1)
        ]
      });
    }
  };

  public render() {
    const { repeaterValue } = this.state;
    console.log(repeaterValue);
    const component = (value: any, index: number) => (
      <div>
        <div>
          <input
            type="text"
            name="typeOfExpense"
            value={repeaterValue ? repeaterValue[index].typeOfExpense : ""}
            onChange={e => this.onValueChange(e, index)}
          />
        </div>
        <div>
          <input
            type="text"
            name="costOfExpense"
            value={repeaterValue ? repeaterValue[index].costOfExpense : ""}
            onChange={e => this.onValueChange(e, index)}
          />
        </div>
        <div>
          <input
            type="date"
            name="dateOfExpense"
            value={repeaterValue ? repeaterValue[index].dateOfExpense : ""}
            onChange={e => this.onValueChange(e, index)}
          />
        </div>
        <div>
          <button onClick={() => this.removeSet(index)}>Remove Expense</button>
        </div>
      </div>
    );
    return (
      <div>
        {repeaterValue
          ? repeaterValue.map((value: any, index: number) => (
              <React.Fragment key={index}>
                {component(value, index)}
              </React.Fragment>
            ))
          : null}
        <button onClick={this.addSet}>Add Expense</button>
      </div>
    );
  }
}

export default Repeater;
