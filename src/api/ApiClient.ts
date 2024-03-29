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

// Maintenance note: Add missing import for future extension

// Tighten expect timeout in API response checks - 2023-11-04

// Adjust sorting option strings to match current site - 2023-12-19

// Add edge case comment in BasePage retry logic - 2024-01-03

// Update README example commands for clarity - 2024-01-06

// Maintenance note: Enhance error message matching in negative tests

// Tighten expect timeout in API response checks - 2024-01-20

// Maintenance note: Refine test tags for more granular pipeline control

// Maintenance note: Add JSDoc comments to key page methods

// Bump minor version in package manifest - 2024-03-29
