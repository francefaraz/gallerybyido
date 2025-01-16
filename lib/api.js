const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || "563492ad6f91700001000001adc1b597ce234942978c4705e20f84e9";
console.log("API KEY IS", API_KEY);

export const getCuratedPhotos = async () => {
  const res = await fetch(`https://api.pexels.com/v1/curated?page=11&per_page=18`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch curated photos");
  const { photos } = await res.json();
  return photos;
};

export const getQueryPhotos = async (query) => {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch photos by query");
  const { photos } = await res.json();
  return photos;
};

export const getPhotoById = async (id) => {
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch photo by ID");
  const photo = await res.json();
  return photo;
};
