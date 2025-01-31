import * as table from '$lib/server/db/schema';
import { db } from '$lib/server/db';

import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
    console.log(await request.json())
    return json({ animal: 'Cat', message: 'MEOW', method: 'POST' });
};

export const GET = async () => {
    return json({ animal: 'Dog', message: 'Woof', method: 'GET' });
};