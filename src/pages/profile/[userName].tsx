import Head from 'next/head';
import ProfileBlock from '../../components/block/profile-block';
import Layout from '../../components/layout/layout';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { getAuthorizedUserRequest } from '../../requests/user.request';
import { IUserExtended } from '../../models/user.model';

type UserProps = {
user: IUserExtended
}

const ProfilePage = (props: UserProps) => {

  console.log(props.user.createdAt)
  return (
    <>
      <Head>
        <title>Profile | Book2Book</title>
      </Head>
      <Layout>
        <ProfileBlock user={props.user}/>
      </Layout>
    </>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async context => {
  let { userName } = context.query;
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
