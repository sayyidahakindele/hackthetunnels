import "./Banner.style.scss";

function Banner() {
  return (
    <div className="Banner">
      <img src="/carleton_logo.png" alt="logo" />
      <div className="Banner__seperator"></div>
      <div className="Banner__title">Carleton Central</div>
      <img src="https://static-00.iconduck.com/assets.00/nerd-face-emoji-2048x2048-toyasgnd.png" className="rotate" width="100" height="100"/>
    </div>
  );
}

export default Banner;
