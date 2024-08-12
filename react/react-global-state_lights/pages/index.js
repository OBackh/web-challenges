import Link from "../components/Link";
import { useState } from "react";

export default function HomePage() {
  const livingRoom = ([livingRoom, setLivingRoom] = useState(0));
  // const kitchen = [kitchen, setKitchen] = useState(0);
  // const bedroom = [bedroom, setBedroom] = useState(0);
  // const bathroom = [bathroom, setBathroom] = useState(0);
  // const garage = [garage, setGarage] = useState(0);
  // const porch = [porch, setPorch] = useState(0);
  // const garden = [garden, setGarden] = useState(0);
  // const office = [office, setOffice] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <p>?? light(s) are on.</p>
      <p>
        <Link href="/rooms" livingRoom={livingRoom}>
          All Rooms →
        </Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
