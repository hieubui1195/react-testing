import renderer from 'react-test-renderer';
import React from 'react';
import  {shallow, mount} from 'enzyme';
import Link from '../../components/Link';

const props = {
    title: 'Default title',
    url: '/link/to/test'
};

function createStub() {
    return function stub() {
      stub.called = true;
    };
  }

describe('Components > Link', () => {
    it('Render a snapshot for Link use renderer', () => {
        const tree = renderer.create(<Link {...props} />).toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it('Render a snapshot for Link use enzyme', () => {
        const tree = shallow(<Link {...props} />);
        
        expect(tree).toMatchSnapshot();
        expect(tree.find('a')).toHaveLength(1);
        // expect(tree.find(Link)).toHaveLength(1);
        console.log(tree.props())
        // expect(tree.props().url).toEqual(props.url)
    })
})
