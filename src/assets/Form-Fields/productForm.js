export default [
    { name: 'title', type: 'text', required: true, label: 'Product Title', value: null },
    { name: 'description', type: 'text', required: true, label: 'Description', value: null },
    { name: 'image', type: 'file', required: false, label: 'Image', value: null }, // Optional image field
    { name: 'pricing', type: 'number', required: true, label: 'Pricing', value: null },
    { name: 'features', type: 'text', required: false, label: 'Features', value: null }, // Optional features field
  ];
  