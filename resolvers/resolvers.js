/* eslint-disable import/extensions */
import editImage from './mutation/editImage.js';
import createImage from './mutation/createImage.js';
import findSingleImage from './queary/findSingleImage.js';

const resolvers = {
  Query: {
    testPerson: () => 'test',
    findSingleImage,
  },
  Mutation: {
    editImage,
    createImage,
  },
};

export default resolvers;
