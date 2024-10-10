export default [
  { name: 'title', type: 'text', required: true, label: 'Blog Title' ,value:null },
  { name: 'description', type: 'text', required: true, label: 'Description',value:null },
  { name: 'date', type: 'date', required: true, label: 'Date', value:null }, // Set to current date by default if needed
  { name: 'category', type: 'text', required: true, label: 'Category',value:null },
  { name: 'image', type: 'file', required: true, label: 'Image',value:null }, // Optional image field
];
