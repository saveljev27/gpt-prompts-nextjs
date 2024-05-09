import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const ProfileForm = () => {
  const session = useSession();
  const { data, status } = session;
  const image = data?.user?.image;
  const testImage = image ? image : '/assets/images/default.svg';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/users').then((response) => {
        response.json().then((data) => {
          setName(data.username);
          setEmail(data.email);
        });
      });
    }
  }, [session, status]);

  const handleProfileUpdate = async (ev) => {
    ev.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch('/api/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  };

  return (
    <div className="mt-10">
      {saved && <p className="text-green-500 text-center my-6">Saved!</p>}
      {isSaving && (
        <p className="text-yellow-500 text-center my-6">Saving...</p>
      )}
      <div className="flex justify-center content-center">
        <Image
          className="rounded-full"
          src={testImage}
          width={100}
          height={100}
          alt="Profile"
        />
      </div>
      <form
        onSubmit={handleProfileUpdate}
        className="mt-10 grid grid-cols-2 gap-2"
      >
        <div className="profile_data">
          <label className="text-gray-500" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            className="profile_input"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="profile_data">
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="profile_input"
            disabled
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <button type="submit" className="green_btn col-span-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
