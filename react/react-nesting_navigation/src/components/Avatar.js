import Image from "./Image";

function Avatar(avatar) {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image className="round-image" src={avatar} alt="avatar"></Image>
      </button>
    </>
  );
}

export default Avatar;
