import Image from "next/image";
function Heading() {
  return (
    <div className="heading">
      <div className="logo">
        <Image src="/images/logo.jpg" width={450} height={260} />
      </div>
      <h1>UNITED CHRISTIAN CONGREGATION (UCC) </h1>
    </div>
  );
}

export default Heading;
