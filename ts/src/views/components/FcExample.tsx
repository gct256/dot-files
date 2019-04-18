import * as React from 'react';

interface FcExampleProps {
  foo?: string;
}

export const FcExample: React.FC<FcExampleProps> = ({
  foo,
}: FcExampleProps) => <div>{foo}</div>;

FcExample.displayName = 'FcExample';

FcExample.defaultProps = {
  foo: 'Foo',
};
