import {
    AppShell,
    Badge,
    Center,
    Group,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import {
    IconLayoutSidebarLeftCollapse,
    IconLayoutSidebarLeftExpand,
    IconLogout2,
} from '@tabler/icons-react';
import { COLORS } from '../utils/Colors';
import ListItem from '../component/ListItem';
import { navItems } from '../utils/navItems';
import NavDropdown from '../component/NavDropdown';

const iconProps = {
    strokeWidth: 1.5,
    color: COLORS.primary,
};

const AppShellLayout = () => {
    const [opened, { toggle }] = useDisclosure();
    const [expand, { toggle: toggleExpand }] = useDisclosure();
    const isMobile = useMediaQuery('(max-width: 768px)');


    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: expand ? 200 : 100,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
        >
            <AppShell.Header>
                <Header opened={opened} toggle={toggle} />
            </AppShell.Header>

            <AppShell.Navbar p="md" className="flex flex-col justify-between">
                <AppShell.Section>
                    <Group gap={0}>
                        {navItems.map((item, index) =>
                            item.dropdown && item.submenu ? (
                                <NavDropdown
                                    key={index}
                                    item={item}
                                    expand={expand}
                                    iconProps={iconProps}
                                />
                            ) : (
                                <ListItem
                                    key={index}
                                    expand={expand}
                                    label={item.label}
                                    link={item.link}
                                    iconComp={<item.icon {...iconProps} />}
                                    dropdown={item.dropdown}
                                    isMobile={isMobile}
                                />
                            )
                        )}
                    </Group>
                </AppShell.Section>

                <AppShell.Section mt="auto" ta={expand ? 'left' : 'center'}>
                    <ListItem
                        expand={expand}
                        label={expand ? 'Collapse' : 'Expand'}
                        iconComp={
                            expand ? (
                                <IconLayoutSidebarLeftCollapse {...iconProps} />
                            ) : (
                                <IconLayoutSidebarLeftExpand {...iconProps} />
                            )
                        }
                        onClick={() =>toggleExpand()}
                        isMobile={isMobile}
                    />
                    <ListItem
                        expand={expand}
                        label={'Logout'}
                        iconComp={<IconLogout2 {...iconProps  } color={COLORS.danger} />}
                        isMobile={isMobile}
                    />
                    <Center mt="md">
                        <Badge
                            size="md"
                            w={expand ? '60%' : '100%'}
                            mx="auto"
                            color="primary"
                            radius="md"
                            className="flex items-center justify-center"
                        >
                        V1.1.0
                        </Badge>
                    </Center>
                </AppShell.Section>
            </AppShell.Navbar>

            <AppShell.Main style={{ alignItems: 'center' }}>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};

export default AppShellLayout;
