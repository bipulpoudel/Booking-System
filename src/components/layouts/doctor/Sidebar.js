import React from "react";
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
} from "@material-ui/core";

import {
  BarChart as BarChartIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
} from "react-feather";

import SidebarItem from "./SidebarItem";

const items = [
  {
    href: "/doctor",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/doctor/timeline",
    icon: ClockIcon,
    title: "Timeline",
  },
  {
    href: "/doctor/events",
    icon: CalendarIcon,
    title: "Events",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <SidebarItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
