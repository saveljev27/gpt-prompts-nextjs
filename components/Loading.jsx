import Image from 'next/image';

const Loading = () => {
  return (
    <div className="mt-10">
      <Image
        src="/assets/icons/loader.svg"
        width={20}
        height={20}
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
