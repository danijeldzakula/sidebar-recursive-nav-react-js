import React from 'react';
import Sidebar from './Sidebar';

const links = [
  {
    label: 'Link',
    path: '/link',
  },
  {
    label: 'Link2',
    path: '/link2',
  },
  {
    label: 'Parent',
    children: [
      {
        label: 'Child',
        path: '/child',
      },
      {
        label: 'Child2',
        path: '/child',
      },
      {
        label: 'Child3',
        path: '/child',
      },
      {
        label: 'Child4',
        path: '/child',
      },
      {
        label: 'Child5',
        path: '/child',
      },
      {
        label: 'Child with Children',
        children: [
          {
            label: 'GrandChild 1',
            path: '/c1',
          },
          {
            label: 'GrandChild 2',
            children: [
              {
                label: 'GreatGrandChild',
                path: '/gc1',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Parent2',
    children: [
      {
        label: 'Parent2Child',
        path: '/child',
      },
      {
        label: 'Parent2Child2',
        path: '/child',
      },
    ],
  },
];

const menus = [
  {
    _id: 1,
    label: 'PC',
    children: [
      {
        _id: 'dfjfdsf',
        label: 'Monitor',
      },
      { _id: 'fsdfdfd', label: 'TV' },
      { _id: 'sdfjsdf', label: 'Gaming' },
    ],
  },
  {
    _id: 2,
    label: 'Computers',
    children: [
      { _id: 'trtrttt', label: 'Video' },
      { _id: 'dfftgtt', label: 'Option' },
      { _id: 'fdfdfff', label: 'Select Image' },
      { _id: 'fgefdfd', label: 'Created at' },
      { _id: 'grfg5gr', label: 'Music' },
      { _id: 'sfsfdfg', label: 'Football' },
      { _id: 'efdfdfd', label: 'Funny' },
    ],
  },
  { _id: 3, label: 'Monitors' },
  { _id: 4, label: 'Gaming' },
  { _id: 5, label: 'Laptop' },
  { _id: 6, label: 'Exclusive Shop' },
  { _id: 7, label: 'Video' },
  { _id: 9, label: 'Design Studio' },
  { _id: 11, label: 'SSD & RAM' },
  { _id: 12, label: 'Memory' },
  { _id: 13, label: 'Tower' },
  { _id: 14, label: 'Power Storage' },
  { _id: 15, label: 'Keyboard & Mouse' },
  { _id: 16, label: 'Speakers' },
  { _id: 17, label: 'Moblie' },
  { _id: 19, label: 'HI-FI' },
  { _id: 20, label: 'Mulitmedia' },
  { _id: 21, label: 'Visiblity' },
  { _id: 22, label: 'Photo' },
];

function App() {
  return (
    <div>
      <Sidebar links={menus} />
    </div>
  );
}

export default App;
