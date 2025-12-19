# Sanity Schema Placeholders

These schema definitions are designed to work with your existing Sanity.io setup for the Shame to Flame ministry family.

## Schema Types Needed for Running to God

### journeyStop
```javascript
export default {
  name: 'journeyStop',
  title: 'Journey Stop',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'distance', title: 'Distance from Perth', type: 'string' },
    { name: 'stopType', title: 'Stop Type', type: 'string', options: { 
      list: ['city', 'desert', 'beach', 'roadhouse', 'camp', 'destination'] 
    }},
    { name: 'shortDescription', title: 'Short Description', type: 'text' },
    { name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'spiritualLesson', title: 'Spiritual Lesson', type: 'text' },
    { name: 'bibleVerseText', title: 'Bible Verse Text', type: 'text' },
    { name: 'bibleVerseReference', title: 'Bible Verse Reference', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display Order', type: 'number' },
  ]
}
```

### campfireDevotion
```javascript
export default {
  name: 'campfireDevotion',
  title: 'Campfire Devotion',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'theme', title: 'Theme', type: 'string' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'bibleVerseText', title: 'Bible Verse Text', type: 'text' },
    { name: 'bibleVerseReference', title: 'Bible Verse Reference', type: 'string' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ]
}
```

### bibleStudy
```javascript
export default {
  name: 'bibleStudy',
  title: 'Bible Study',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'lessons', title: 'Number of Lessons', type: 'number' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'order', title: 'Display Order', type: 'number' },
  ]
}
```

## Integration Notes

1. Add these schemas to your existing Sanity project
2. Create a `site` field on each schema to filter content by website
3. Use GROQ queries in Next.js to fetch content:

```javascript
// Example query for Running to God journey stops
*[_type == "journeyStop" && site == "running-to-god"] | order(order asc)
```

4. Install `@sanity/client` and `next-sanity` in this Next.js project

When you're ready to integrate, we can:
1. Connect to your existing Sanity project
2. Migrate the placeholder data from `src/data/` to Sanity
3. Update pages to fetch from Sanity instead of static data
