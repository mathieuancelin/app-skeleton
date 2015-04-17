'use strict';

import React from 'react/addons';
import SuperClock from './components/SuperClock';

export function mountClockAt(node) {
  React.render(<SuperClock />, node);
};
