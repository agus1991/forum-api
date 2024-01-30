const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    const useCasePayload = {
      title: 'this is title',
      body: 'this is body',
      owner: 'user-123',
    };
    const mockThreadRepository = new ThreadRepository();
    const mockReturnAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'this is title',
      owner: 'owner-123',
    });
    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddedThread));
    const useCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });
    const expectedAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'this is title',
      owner: 'owner-123',
    });
    const addedThread = await useCase.execute(useCasePayload);
    expect(addedThread).toStrictEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(useCasePayload);
  });
});