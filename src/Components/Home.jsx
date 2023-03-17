import { useLocation } from "react-router-dom"; 

export default function Home() {
  const location = useLocation();
  console.log(location);
  return <div>This is a Home page</div>;
}
