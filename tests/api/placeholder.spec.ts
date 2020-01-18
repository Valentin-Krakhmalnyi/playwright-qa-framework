import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';

/**
 * API tests against public JSONPlaceholder service.
 * Tagged @api.
 */
test.describe('JSONPlaceholder API tests @api', () => {
  let api: ApiClient;

  test.beforeAll(async () => {
    api = new ApiClient();
  });

  test('should retrieve a list of posts', async () => {
    const posts = await api.getPosts();
    expect(posts.length).toBeGreaterThan(50);
    expect(posts[0]).toHaveProperty('title');
  });

  test('should fetch a single post by id', async () => {
    const post = await api.getPostById(1);
    expect(post.id).toBe(1);
    expect(post).toHaveProperty('body');
  });

  test('should successfully create a new post', async () => {
    const newPost = {
      title: 'Automated test post from framework',
      body: 'Created during Playwright API test execution',
      userId: 1,
    };
    const created = await api.createPost(newPost);
    expect(created).toHaveProperty('id');
    expect(created.title).toBe(newPost.title);
  });
});