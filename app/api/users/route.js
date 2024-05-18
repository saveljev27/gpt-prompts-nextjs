import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

import { connectToDB } from '@utils/database';
import User from '@models/user';

export async function PUT(req) {
  connectToDB();
  const data = await req.json();
  const session = await getServerSession(options);
  const email = session.user.email;

  if ('name' in data) {
    await User.updateOne({ email }, { username: data.name });
  }

  return Response.json(true);
}

export async function GET() {
  connectToDB();
  const session = await getServerSession(options);
  const email = session.user.email;
  return Response.json(await User.findOne({ email }));
}
