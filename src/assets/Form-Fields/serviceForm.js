export default [
    { name: 'title', type: 'text', required: true, label: 'Service Title' },
    { name: 'description', type: 'text', required: true, label: 'Description' },
    { name: 'category', type: 'text', required: true, label: 'Category' },
    { name: 'time', type: 'time', required: true, label: 'Time' }, // Change to 'number' or 'date' if needed
    { name: 'pricing', type: 'number', required: true, label: 'Pricing' },
    { name: 'image', type: 'file', required: true, label: 'Image' }, // Optional image field
  ];
  