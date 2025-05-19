import { IconHome,  IconSettings, IconUser, IconTool, IconDatabase, IconChartBar, IconBrandStorybook } from "@tabler/icons-react";

export const navItems = [
  { label: 'Home', link: '/', icon: IconHome, dropdown: false },
  {
    label: 'Service',
    link: '/service',
    icon: IconBrandStorybook,
    dropdown: true,
    submenu: [
      { label: 'Tools', link: '/service/tools', icon: IconTool },
      { label: 'Database', link: '/service/database', icon: IconDatabase },
      { label: 'Analytics', link: '/service/analytics', icon: IconChartBar }
    ]
  },
  { label: 'Settings', link: '/settings', icon: IconSettings, dropdown: false },

];
