import React, { useRef } from 'react';
import ScrollComponent from '../../components/scroll/index';
import Less from './index.less';
const SrcollComponent: React.FC<{}> = function () {
  const ref = useRef<any | null>(null);
  const list: Array<React.ReactElement> = [
    <div className={'height-full width-400 margin-0-16 ' + Less['background-color-1']}>1</div>,
    <div className={'height-full width-400 margin-0-16 ' + Less['background-color-2']}>2</div>,
    <div className={'height-full width-400 margin-0-16 ' + Less['background-color-3']}>3</div>,
    <div className={'height-full width-400 margin-0-16 ' + Less['background-color-4']}>4</div>,
    <div className={'height-full width-400 margin-0-16 ' + Less['background-color-5']}>5</div>,
    <div className={'height-full width-400 margin-0-16 ' + Less['background-color-6']}>6</div>,
  ];
  return (
    <>
      <div className="height-100">
        <ScrollComponent listImg={list} speed={60} />
      </div>
    </>
  );
};

export default SrcollComponent;
