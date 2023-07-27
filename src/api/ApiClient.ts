import { APIRequestContext, request } from '@playwright/test';

/**
 * Lightweight API client built on Playwright request context.
 * Used for JSONPlaceholder integration tests. Expanded significantly in 2021-2024.
 */
export class ApiClient {
  private readonly baseUrl: string;
  private requestContext: APIRequestContext | null = null;

  constructor(baseUrl = 'https://jsonplaceholder.typicode.com') {
    this.baseUrl = baseUrl;
  }

  private async getContext(): Promise<APIRequestContext> {
    if (!this.requestContext) {
      this.requestContext = await request.newContext({
        baseURL: this.baseUrl,
        extraHTTPHeaders: { 'Content-Type': 'application/json; charset=utf-8' },
      });
    }
    return this.requestContext;
  }

  async getPosts(): Promise<any[]> {
    const ctx = await this.getContext();
    const response = await ctx.get('/posts');
    if (!response.ok()) throw new Error(`Failed to fetch posts: ${response.status()}`);
    return response.json();
  }

  async getPostById(id: number): Promise<any> {
    const ctx = await this.getContext();
    const response = await ctx.get(`/posts/${id}`);
    if (!response.ok()) throw new Error(`Post ${id} not found`);
    return response.json();
  }

  async createPost(post: { title: string; body: string; userId: number }): Promise<any> {
    const ctx = await this.getContext();
    const response = await ctx.post('/posts', { data: post });
    if (!response.ok()) throw new Error('Failed to create post');
    return response.json();
  }

  async getUsers(): Promise<any[]> {
    const ctx = await this.getContext();
    const response = await ctx.get('/users');
    return response.json();
  }
}
// Clean up console noise in test output - 2023-06-20

// Maintenance note: Bump minor version in package manifest
