import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export async function getAllPosts() {
  const response = await client.get({
    endpoint: 'blog',
  });
  return response.contents;
}

export async function getPostById(id: string) {
  const response = await client.get({
    endpoint: 'blog',
    contentId: id,
  });
  return response;
}

export async function getCategories() {
  const response = await client.get({
    endpoint: 'categories',
  });
  return response.contents;
}

export async function getPostsByCategory(categoryId: string) {
  const response = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[equals]${categoryId}` },
  });
  return response.contents;
}

export async function getTags() {
  const response = await client.get({
    endpoint: 'tags',
  });
  return response.contents;
}