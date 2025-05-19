import React, { useState } from 'react';
import {
    Box,
    Collapse,
    Group,
    Text,
    ActionIcon,
    UnstyledButton,
    Tooltip
} from '@mantine/core';
import { IconCaretRightFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const NavDropdown = ({ item, expand = true, iconProps = {} }) => {
    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened((prev) => !prev);
    };
    const navigate = useNavigate()

    return (
        <Box>
            <Tooltip
                hidden={expand}
                label={item?.label}
                withArrow
                position='right'
                offset={14}
            >
                <UnstyledButton
                    onClick={handleToggle}
                    component='span'
                    bg={'white'}
                    w={'100%'}
                    style={{
                        borderRadius: 4,
                        padding: expand ? '0' : '8px 12px',

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Group justify='flex-start'>
                        <ActionIcon variant="transparent" size={50} onClick={() => navigate(item.link)}>
                            <item.icon {...iconProps} />
                        </ActionIcon>
                        {expand && <Text size="sm">{item.label}</Text>}
                    </Group>
                    {expand && (
                        <IconCaretRightFilled
                            size={16}
                            stroke={1.5}
                            style={{
                                marginLeft: 'auto',
                                transition: 'transform 0.2s ease',
                                transform: opened ? 'rotate(-90deg)' : 'none',
                            }}
                        />
                    )}
                </UnstyledButton>
            </Tooltip>


            <Collapse in={opened}>
                <Box ml={expand ? 36 : 10} mt="xs">
                    {item.submenu?.map((sub, index) => (
                        <Tooltip
                            hidden={expand}
                            label={sub?.label}
                            withArrow
                            position='right'
                            offset={14}
                            key={index}
                        >
                            <UnstyledButton
                                component="a"
                                href={sub.link}
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: expand ? ' 8px 0' : '8px 12px',

                                    borderRadius: 4,
                                    color: '#495057',
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    width: '100%',
                                }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate(sub.link)
                                }}
                            >
                                {sub.icon && <sub.icon {...iconProps} size={18} />}
                                {expand && <Text>{sub.label}</Text>}
                            </UnstyledButton>
                        </Tooltip>

                    ))}
                </Box>
            </Collapse>
        </Box>
    );
};

export default NavDropdown;
