'use server';

import { redirect } from "next/navigation";

export async function savePlayer(formData: FormData) {
 // const username = formData.get('username') as string;
 // const isHost = formData.get('is_host') === 'true';
 // const isAlive = formData.get('is_alive') === 'true';

  // Map directly to your players table schema
  /*const playerData = {
    username,
    is_host: isHost,
    is_alive: isAlive,
    score: 0,
    joined_at: new Date().toISOString(),
  };
*/
redirect('rooms');
  // Perform your database insert logic here (e.g., Supabase / Prisma / SQL)
  //console.log('Saving player data:', playerData);
}