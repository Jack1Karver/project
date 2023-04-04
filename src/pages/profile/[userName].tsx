import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { GetServerSideProps } from 'next';
import { getAuthorizedUserRequest } from '../../requests/user.request';
import { IUserExtended } from '../../models/user.model';
import Profile from '../../components/profile/profile';

type UserProps = {
  user: IUserExtended;
};

const ProfilePage = (props: UserProps) => {
  return (
    <>
      <Head>
        <title>Profile | Book2Book</title>
      </Head>
      <Layout>
        <Profile user={props.user} />
      </Layout>
    </>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async context => {
  const { userName } = context.query;
  let user;

  if (typeof userName === 'string') {
    user = await getAuthorizedUserRequest(userName);
  }
  if (!user) {
    return { notFound: true };
  }

  return {
    props: {
      user,
    },
  };
};
