'use client';
import PromptCard from './PromptCard';
import ProfileForm from './ProfileForm';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      {name === 'My' && <ProfileForm />}
      <h1 className="font-bold text-lg text-green-600 text-left mt-10">
        Prompts: {data.length}
      </h1>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
