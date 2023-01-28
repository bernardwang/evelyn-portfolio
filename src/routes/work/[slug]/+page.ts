import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
 
  throw error(404, 'Not found');
}

// +page.server.ts
///** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   const post = await getPostFromDatabase(params.slug);
//  
//   if (post) {
//     return post;
//   }
//  
//   throw error(404, 'Not found');
// }