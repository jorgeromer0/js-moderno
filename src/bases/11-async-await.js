const getImage = async () => {
  try {
    const apiKey = "ZUXvDsbsse1gRWOESdAWUvZ3CxRfKgUV";
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
