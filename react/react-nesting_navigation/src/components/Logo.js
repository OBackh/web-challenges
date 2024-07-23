import Image from "./Image";

function Logo(logo) {
  return (
    <>
      <Image></Image>
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
    </>
  );
}

export default Logo;
