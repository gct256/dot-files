import * as React from 'react';

interface FCSampleProps {
  foo?: string;
}

export const FCSample: React.FC<FCSampleProps> = ({ foo }: FCSampleProps) => (
  <div>{foo}</div>
);

FCSample.displayName = 'FCSample';

FCSample.defaultProps = {
  foo: 'Foo',
};
