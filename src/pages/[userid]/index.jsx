import Link from "next/link";
import { useParams } from "next/navigation";

const Aboutcomp = () => {
  // Use useParams to get dynamic route parameters
  const {userid} = useParams();

  // Log the userid for debugging
  console.log(userid);

  return (
    <>
      <div>
        {/* Display the dynamic userid */}
        dynamic with id {userid}
      </div>
      {/* Link to another route */}
      <Link href="/api">click to route</Link>
    </>
  );
};

export default Aboutcomp;