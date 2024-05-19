// import { del } from '@vercel/blob';
 
// export const runtime = 'edge';
 
// export async function DELETE(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const urlToDelete = searchParams.get('https://vnogecem2sozqdxb.public.blob.vercel-storage.com/VidoePlayerBlog/dama_final-2PVKFHbLhRbi2U0vwkBowBxWkXZGOj.mp4') as string;
  
//   await del(urlToDelete);
 
//   return new Response();
// }