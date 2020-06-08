import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
    const followerList = [{nickname: '정은여신'}, {nickname:'큐트'}, {nickname: '뷰티풀'}];
    const followingList = [{nickname: '정은여신'}, {nickname:'큐트'}, {nickname: '뷰티풀'}];
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
};

export default profile;