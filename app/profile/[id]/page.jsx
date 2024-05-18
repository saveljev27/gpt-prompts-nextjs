'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <Profile name={userName} desc="Welcome to guest page" data={posts} />
    </Suspense>
  );
};

export default UserProfile;
