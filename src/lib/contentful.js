import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  environment: 'master',
});

export async function getTestimonials() {
  try {
    const res = await client.getEntries({
      content_type: 'tribeZoneTestimonials',
      limit: 3,
    });

    return res.items.map((item) => ({
      name: item.fields?.userName || 'Anonymous',
      quote: item.fields?.opinion?.content?.[0]?.content?.[0]?.value || 'No opinion provided.',
      image: item.fields?.userPic?.fields?.file?.url || '/default.jpg',
      role: '', // if you want to add later
    }));
  } catch (err) {
    console.error('❌ Failed to fetch from Contentful:', err.message);
    return [];
  }
}
