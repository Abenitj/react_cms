import axios from 'axios';

const Create = async (formData, url) => {
  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return { data: response.data };
  } catch (error) {
    if (error.response && error.response.data.message) {
      return { error: error.response.data.message };
    } else {
      return { error: 'An unexpected error occurred. Please try again.' };
    }
  }
};

export default Create;
