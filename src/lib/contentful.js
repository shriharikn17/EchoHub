import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

let client = null;
if (space && accessToken) {
  client = createClient({
    space,
    accessToken,
    environment: 'master',
  });
}

export async function getTestimonials() {
  if (!client) {
    console.warn('Contentful credentials are missing. No testimonials will be shown.');
    return [];
  }
  try {
    const res = await client.getEntries({
      content_type: 'tribeZoneTestimonials',
      limit: 9,
    });
    return res.items.map((item) => ({
      name: item.fields?.userName || 'Anonymous',
      quote: item.fields?.opinion?.content?.[0]?.content?.[0]?.value || 'No opinion provided.',
      image: item.fields?.userPic?.fields?.file?.url || '/default.jpg',
      role: '',
    }));
  } catch (err) {
    console.error('❌ Failed to fetch from Contentful:', err.message);
    return [];
  }
}
