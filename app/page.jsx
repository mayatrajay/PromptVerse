import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
	  Unlock Your Creativity
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> with PromptVerse</span>
    </h1>
    <p className='desc text-center'>
	  PromptVerse is an innovative AI-powered platform that helps you discover, create, and share captivating prompts. Fuel your creativity and dive into a world of endless inspiration, 
	  where ideas come to life
    </p>

    <Feed />
  </section>
);

export default Home;
