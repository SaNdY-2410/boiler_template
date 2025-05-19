import { ActionIcon, AppShell, Avatar, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

const Header = ({ opened, toggle }) => {

  const navigate = useNavigate()

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        Header
      </Group>
      <Group>
     
        <Avatar radius="xl" size="md" color="blue" variant="outline" style={{
          cursor: 'pointer'
        }}
          onClick={() => navigate('/profile')}
        >
           {'Admin'.slice(0, 2).toUpperCase()}
        </Avatar>
      </Group>
    </Group>
  );
};

export default Header;
