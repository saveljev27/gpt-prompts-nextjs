import { connectToDB } from '@utils/database';

import Prompt from '@models/prompt';

export const GET = async () => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}, null, {
      sort: { createdAt: -1 },
    }).populate('creator');
    return new Response(JSON.stringify(prompts));
  } catch (error) {
    console.log(error);
    return new Response('Failed to fetch all prompts');
  }
};
