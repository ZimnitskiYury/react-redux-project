import { useState } from 'react';


function useLoadImage() {
  const [
    image,
    setImage,
  ] = useState('');
  const [
    url,
    setUrl,
  ] = useState('');
  const uploadImage = () => {
    const data = new FormData();
    data.append(
      'file',
      image,
    );
    data.append(
      'upload_preset',
      'user_photo',
    );
    data.append(
      'cloud_name',
      'dzape7qgw',
    );
    fetch(
      '  https://api.cloudinary.com/v1_1/dzape7qgw/image/upload',
      {
        method: 'post',
        body: data,
      },
    )
      .then((resp) => resp.json())
      .then((result) => {
        setUrl(result.url);
      });
  };

  return {
    url,
    onChange: (e) => setImage(e.target.files[0]),
    onClick: uploadImage,
  };
}

export default useLoadImage;
