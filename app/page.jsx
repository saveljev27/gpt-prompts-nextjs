import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Awesome ChatGPT Prompts
        <br className="max-md:hidden" />
      </h1>
      <p className="desc text-center">
        The ChatGPT model is a large language model trained by OpenAI that is
        capable of generating human-like text. By providing it with a prompt, it
        can generate responses that continue the conversation or expand on the
        given prompt.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
