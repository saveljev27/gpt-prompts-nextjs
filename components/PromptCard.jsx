'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');
  const { data: session } = useSession();

  const pathName = usePathname();
  const router = useRouter();

  const handleProfileCheck = () => {
    if (post.creator._id === session?.user.id) return router.push('/profile');
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(''), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileCheck}
        >
          <Image
            src={post.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-white">
              {post.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
            alt="Copy"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-white">{post.prompt}</p>
      <p className="my-4 font-satoshi text-sm text-white">
        <span className="text-gray-500 text-sm font-inter">Tags:</span>
        <span
          className="font-inter ml-1 text-sm text-green-600 cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          {post.tag}
        </span>
      </p>

      {session?.user.id === post.creator?._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="green_btn cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p className="delete_btn cursor-pointer" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
