import { Tab as BaseTab, TabProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const Tab = withStyles(() => ({}))((props: TabProps) => (
  <BaseTab
    {...props}
    className="focus:outline-none"
    label={
      <p className={`${props.selected ? 'text-red-900' : 'text-cw-gray'} font-medium tracking-widest z-20 flex flex-wrap-reverse py-6 px-8 normal-case`}>        
        {props.label}
        <img src={`/images/${props.label.toString().toLowerCase()}${props.selected ? '-active' : ''}.svg`} alt="icon" className="h-6 px-3"/>
      </p>
    }
  />
)) as typeof BaseTab;

export default Tab;
