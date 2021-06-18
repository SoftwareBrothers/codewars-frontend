import { Tab as BaseTab, TabProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const Tab = withStyles(() => ({}))((props: TabProps) => (
  <BaseTab
    {...props}
    className="focus:outline-none"
    label={
      <p className={`${props.selected ? 'text-red-900' : 'text-grey-700'} font-bold tracking-widest z-20 flex flex-wrap-reverse py-6 px-8`}>        
        {props.label}
        <img src={`/images/${props.label.toString().toLowerCase()}${props.selected ? '-active' : ''}.svg`} alt="icon" className="h-6 px-3"/>
      </p>
    }
  />
)) as typeof BaseTab;

export default Tab;
