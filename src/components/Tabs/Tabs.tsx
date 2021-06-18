import { Tabs as BaseTabs, TabsProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const Tabs = withStyles(() => ({}))((props: TabsProps) => (
  <BaseTabs
    value={props.value}
    onChange={props.onChange}
    indicatorColor="primary"
    TabIndicatorProps={{
      className: 'h-20 border-b-4 border-red-900',
    }}
    {...props}
    className="border-b-2 border-b-light-dark"
  />
)) as typeof BaseTabs;

export default Tabs;
