import Image from 'next/image';
import { posts } from '../assets/data/posts';

export default function Posts() {
  return (
    <section>
      <h2 className='font-bold text-lg ml-44 py-5'>Últimos posts</h2>
      <article className='grid grid-cols-2 ml-44 mr-44 gap-10'>
        {posts.map((post) => (
          <div key={post.title}>
            <Image
              src={post.cover}
              alt='A driver game cover'
              width={700}
              height={200}
              className='w-full shadow-lg'
            />
            <h3 className='py-4 text-justify text-lg font-bold'>{post.title}</h3>
          </div>
        ))}
      </article>
    </section>
  );
}
