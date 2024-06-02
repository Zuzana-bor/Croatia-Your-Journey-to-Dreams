import React from 'react';
import AboutCroatiaNews from '../layout/AboutCroatiaNews';
import Header from '../layout/Header';
import { useState } from 'react';
import { AppContext } from '../store/AppContext';

export type MediaItem = {
  item: string;
  index: number;
  baseUrl: string;
};

const MediaPage = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const { user } = React.useContext(AppContext);

  const loadMediaItems = () => {
    console.log('funguju');

    if (user) {
      fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.mediaItems) {
            setMediaItems(data.mediaItems);
          }

          console.log(mediaItems);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <Header />
      <AboutCroatiaNews />
      <p>fotky test</p>
      <button onClick={loadMediaItems}>Načíst fotky</button>
      {mediaItems.map((item, index) => (
        <img key={index} src={item.baseUrl} alt={`Fotka${index}`} />
      ))}
    </>
  );
};

export default MediaPage;
