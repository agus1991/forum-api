const ThreadRepository = require('../ThreadRepository');

describe('ThreadRepository abstract', () => {
  it('should throw error when invoke abstract behavior', async () => {
    /**
     * @TODO 1
     * Lengkapi pengujian untuk `ThreadRepository` abstract
     * Pastikan semua fungsi yang ada di `ThreadRepository`
     * membangkitkan `Error` THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED
     *
     */
    //Arrange
    const threadRepository = new ThreadRepository();

    //Action
    //const addThread = ThreadRepository.addThread({});
    //const isThreadExist = ThreadRepository.isThreadExist('');
    //const getThreadById = ThreadRepository.getThreadById('');

    //Assert
    //await expect(addThread).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    //await expect(isThreadExist).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    //await expect(getThreadById).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');

    //Action & Assert
//    await expect(ThreadRepository.addThread({})).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
//    await expect(ThreadRepository.isThreadExist('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
//    await expect(ThreadRepository.getThreadById('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  
    await expect(threadRepository.addThread({})).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(threadRepository.isThreadExist('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(threadRepository.getThreadById('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
