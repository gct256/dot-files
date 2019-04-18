import * as React from 'react';

interface ClassExampleProps {
  foo?: string;
}

interface ClassExampleState {
  bar: string;
}

export class ClassExample extends React.Component<
  ClassExampleProps,
  ClassExampleState
> {
  public static defaultProps: Partial<ClassExampleProps> = {
    foo: 'Foo',
  };

  public state: ClassExampleState = {
    bar: 'Bar',
  };

  public render() {
    const { foo } = this.props;
    const { bar } = this.state;

    return (
      <>
        {foo}
        {bar}
      </>
    );
  }
}
