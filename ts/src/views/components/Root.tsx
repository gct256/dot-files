import * as React from 'react';

import { FCSample } from './FCSample';
import { ClassSample } from './ClassSample';

interface RootProps {
  title?: string;
}

export const Root: React.FC<RootProps> = ({ title }: RootProps) => (
  <>
    <div>{title}</div>
    <FCSample />
    <ClassSample />
  </>
);

Root.displayName = 'Root';

Root.defaultProps = {
  title: 'Title',
};
