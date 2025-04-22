import { AppShell, Burger, Group, Skeleton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppShellLayout = () => {
    const [opened, { toggle }] = useDisclosure()
    const [expand, { toggle: toggleExpand }] = useDisclosure()
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: expand ? 200 : 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened }
            }}
            footer={{ height: 60 }}
        >
            <AppShell.Header>
                <Group h='100%' px='md' justify='space-between'>
                    Header
                    <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main style={{ alignItems: 'center' }}>
                <Outlet />
            </AppShell.Main>
            <AppShell.Footer p={'md'}>Footer</AppShell.Footer>
        </AppShell>
    )
}

export default AppShellLayout