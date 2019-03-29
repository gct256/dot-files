import * as React from 'react';

interface ClassSampleProps {
  foo?: string;
}

interface ClassSampleState {
  bar: string;
}

export class ClassSample extends React.Component<
  ClassSampleProps,
  ClassSampleState
> {
  public static defaultProps: Partial<ClassSampleProps> = {
    foo: 'Foo',
  };

  public state: ClassSampleState = {
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
