import { GraphQLError } from 'graphql';
import Image from '../../models/Image';

const findImagesForModule = async (root, args) => {
  const image = await Image.find({ mod: args.mod });
  if (image.lenth === 0) {
    throw new GraphQLError('No existe el modulo', {
      extensions: {
        code: 'USER_INPUT_ERROR',
        invalidArgs: args.mod,
      },
    });
  }
  return image;
};

export default findImagesForModule;
