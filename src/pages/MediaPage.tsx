import React, { useState, useContext } from 'react';
import AboutCroatiaNews from '../layout/AboutCroatiaNews';
import { AppContext } from '../store/AppContext';
import Hero from '../layout/Hero';

export type MediaItem = {
  baseUrl: string;
  filename: string;
};

export type Album = {
  id: string;
  title: string;
};

export type User = {
  access_token: string;
};

const MediaPage: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const { user } = useContext(AppContext);

  const loadMediaItems = () => {
    console.log('funguju');

    if (user) {
      fetch('https://photoslibrary.googleapis.com/v1/albums', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const testAlbum: Album | undefined = data.albums.find(
            (album: Album) => album.title === 'Test',
          );
          if (testAlbum) {
            fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`,
              },
              body: JSON.stringify({
                albumId: testAlbum.id,
              }),
            })
              .then((res) => res.json())
              .then((mediaData) => {
                console.log(mediaData);
                if (mediaData.mediaItems) {
                  setMediaItems(mediaData.mediaItems);
                }
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            console.error('Album "Test" not found');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <Hero />
      <AboutCroatiaNews />
      <p>Fotky z alba "Test"</p>
      <button onClick={loadMediaItems}>Načíst fotky</button>
      {mediaItems.map((item, index) => (
        <img key={index} src={item.baseUrl} alt={`Fotka ${index}`} />
      ))}
    </>
  );
};

export default MediaPage;
