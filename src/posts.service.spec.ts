import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    expect(postsService.find('1')).toEqual({
      id: '1',
      text: 'Some pre-existing post',
      date: expect.any(String)
    })
    // реализуйте тест-кейс
  });

  it('should find a post', () => {
    expect(postsService.find('1')).toEqual({
      id: '1',
      text: 'Some pre-existing post',
      date: expect.any(String)
    })
    // реализуйте тест-кейс
  });
});