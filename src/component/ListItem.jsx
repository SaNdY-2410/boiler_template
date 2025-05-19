import { ActionIcon, Flex, Group, Text, Tooltip, UnstyledButton } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListItem = ({ expand, label, onClick, iconComp, active, isMobile, link }) => {

  const navigate = useNavigate();

  return (
    <Tooltip
      hidden={expand}
      label={label}
      withArrow
      position='right'
      offset={14}
    >
      <UnstyledButton
        dir='ltr'
        onClick={onClick}
        bg={active ? 'primary.1' : 'white'}
        w={'100%'}
        style={{
          borderRadius: 4,
          padding: expand ? '0' : '8px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Group justify='flex-start' gap={ expand ? 0 : 'xs'}>
          <Flex align={'center'} dir='row'>
            <ActionIcon component='div' variant={'transparent'} size={50} onClick={() => navigate(link)}>
              {iconComp}
            </ActionIcon>
            <Text
              size='md'
              hidden={isMobile ? expand : !expand}
              c={active ? 'primary.9' : 'dark.3'}
            >
              {label}
            </Text>
          </Flex>
        </Group>
      </UnstyledButton>
    </Tooltip>
  )
}

export default ListItem