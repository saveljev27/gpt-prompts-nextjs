import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Profile from '@components/Profile';

const UserProfile = () => {
  const [searchParams, setSearchParams] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setSearchParams(useSearchParams());
  }, []);

  useEffect(() => {
    if (!searchParams) return;

    const fetchPosts = async () => {
      const response = await fetch(
        `/api/users/${searchParams.get('id')}/posts`
      );
      const data = await response.json();
      setPosts(data);
    };

    if (searchParams.get('id')) {
      fetchPosts();
    }
  }, [searchParams]);

  if (!searchParams) {
    return <div>Loading parameters...</div>;
  }

  return (
    <Profile
      name={searchParams.get('name')}
      desc="Welcome to guest page"
      data={posts}
    />
  );
};

const UserPage = () => {
  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <UserProfile />
    </Suspense>
  );
};

export default UserPage;
