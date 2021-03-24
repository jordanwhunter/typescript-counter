export enum InputType {
  Numerical,
  Operator
};

export enum OperatorType {
  Add = 'add',
  Subtract = 'subtract',
  Equals = 'equals'
};

export type CalcInput = 
| {
  type: InputType.Numerical;
  value: number
} 
| {
  type: InputType.Operator;
  operator: OperatorType
};

export type CalcState = {
  displayValue: number;
};

/**
 * input: [1, 2, +, 3, =]
 * output: [{+ 12}, {+ 3}, {=}]
 */

export type Operation = {
  operator: OperatorType;
  value: number;
};

type OperationsBuilder = {
  operations: Operation[];
  working: Operation;
};

export const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
  const builder: OperationsBuilder = inputs.reduce<OperationsBuilder>(
    (builder, input): OperationsBuilder => {
      switch(input.type) {
        case InputType.Numerical:
          // output current value OR output 0
          const prevValue = builder.working?.value || 0;
          // multiplied by 10 to append to right
          const newValue = prevValue * 10 + input.value;

          return {
            ...builder, 
            working: { 
              ...builder.working,
              value: newValue 
            }
          };

        case InputType.Operator:
          if (input.operator === OperatorType.Equals) {
            return {
              operations: [
                ...builder.operations, 
                builder.working,
                {
                  operator: OperatorType.Equals, 
                  value: 0
                }
              ],
              working: { 
                operator: OperatorType.Add, 
                value: 0 
              }
            } 
          } else {
            return {
              operations: [
                ...builder.operations, 
                builder.working
              ],
              working: { 
                operator: input.operator, 
                value: 0 
              } 
            }
          };
      };
    },
    {
      operations: [], 
      working: { 
        operator: OperatorType.Add,
        value: 0
      }
    } as OperationsBuilder
  );

  return builder.operations
};

const getState = (inputs: Array<CalcInput>): CalcState => {
  return { displayValue: 0 };
};

const Calc = {
  getState
};

export default Calc;

/** 
 * Calculator Brain:
 * Input: --> [UserInput, UserInput, ...]
 * Generate: --> { state }
*/
