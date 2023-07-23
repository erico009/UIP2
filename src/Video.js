const src = "https://www.youtube.com/embed/_8Br_SI_ma8?version=3&autoplay=1&loop=1&playlist=_8Br_SI_ma8";

const Video = () => {
  return (
    <iframe
      width="1080"
      height="720"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;