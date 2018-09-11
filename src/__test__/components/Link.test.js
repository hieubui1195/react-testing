import renderer from 'react-test-renderer';
import React from 'react';
import Link from '../../components/Link';

const props = {
    title: 'Default title',
    url: '/link/to/test'
};

describe('Components > Link', () => {
    it('Render a snapshot for Link use renderer', () => {
        const tree = renderer.create(<Link {...props} />).toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})
