import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/basic">Basic Example</Link>
      </li>
      <li>
        <Link href="/jwt-cookie">JWT Cookie</Link>
      </li>
      <li>
        <Link href="/connect-button">Connect Button Integration</Link>
      </li>
      <li>
        <Link href="/jwt-cookie-admin">Action limited to Admin (w Redirect)</Link>
      </li>
      <li>
        <Link href="/jwt-admin-action">Action limited to Admin (w Refresh)</Link>
      </li>
    </ul>
  );
};

export default Home;
