'use client';

import { SettingOutlined } from '@ant-design/icons';
import { Button, Layout, Tooltip, theme } from 'antd';
import Logo from '../components/Logo';
import SideMenu from '../components/SideMenu';
import styles from './styles.module.scss';

const { Header, Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, colorBgLayout },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: colorBgContainer,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 var(--spacing-4)',
        }}
      >
        <div className={styles.homeButton}>
          <Button
            type='text'
            href={'/dashboard'}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              height: 46,
            }}
          >
            <Logo width={150} className={styles.hideOnMobile} />
            <Logo isIconOnly className={styles.displayOnMobile} />
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'var(--spacing-4)',
          }}
        >
          <Button type='default' href='/sign-out'>
            Se déconnecter
          </Button>
          <Tooltip placement='bottom' title='Paramètres'>
            <Button type='ghost' href='/settings'>
              <SettingOutlined />
            </Button>
          </Tooltip>
        </div>
      </Header>
      <Layout>
        <SideMenu />
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
