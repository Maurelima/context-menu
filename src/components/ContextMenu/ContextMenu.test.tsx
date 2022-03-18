import React from 'react';
import { render } from '@testing-library/react';

import ContextMenu from './ContextMenu';

describe('ContextMenu', () => {
    test("renders the context component", () => {
        render(<ContextMenu showContextMenu={false} menuData={[]} anchorPoint={{
            xClickPosition: 0,
            yClickPosition: 0
        }} />)
    })
})