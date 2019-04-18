import * as React from 'react';

import { FcExample } from './FcExample';
import { ClassExample } from './ClassExample';

interface RootProps {
  title?: string;
}

export const Root: React.FC<RootProps> = ({ title }: RootProps) => (
  <>
    <div>{title}</div>
    <FcExample />
    <ClassExample />
  </>
);

Root.displayName = 'Root';

Root.defaultProps = {
  title: 'Title',
};
