const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
//const AddThreadUseCase = require('../AddThreadUseCase');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
    // Arrange
    const mockThreadRepository = new ThreadRepository();
    const mockReturnAddedThread = new AddedThread ({
      id : 'thread-123',
      title : 'title',
      owner : 'user-123',
    });

    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddedThread));

    const useCase = new AddThreadUseCase({
      threadRepository:mockThreadRepository,
    });

    const useCasePayload = {
      title : 'title',
      body : 'body',
      owner : 'user-123',
    };

    const expectedAddedThread = new AddedThread ({
      id : 'thread-123',
      title : 'title',
      owner : 'user-123',
    });
    // Action
    //const AddedThread = await useCase.execute(useCasePayload);
    const addedThread = await useCase.execute(useCasePayload); 

    // Assert
    // expect(AddedThread).toStrictEqual(expectedAddedThread);
    expect(addedThread).toStrictEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(useCasePayload); 

  });
});
