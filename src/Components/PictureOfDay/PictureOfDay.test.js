import React from 'react';
import ReactDOM from 'react-dom';
import PictureOfDay from './PictureOfDay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PictureOfDay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
