import React from "react";

const OrganizationItem = ({ imgUrl, type = "organization" }) => {
  let contentSize = "";

  if (type === "organization") {
    contentSize = "w-8 sm:w-14 h-8 sm:h-14";
  } else {
    contentSize = "w-4 sm:w-8 h-4 sm:h-8";
  }

  return (
    <div className={`bg-white  ${contentSize}`}>
      {/* Image or SVG */}
      <img src={imgUrl} alt={imgUrl} />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full p-16 bg-[#020181] text-white text-center ">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-xl sm:text-3xl sm:w-[500px] font-medium tracking-wider leading-normal">
          Himpunan Mahasiswa Teknik Informatika
        </h2>

        <div className="flex gap-6">
          <OrganizationItem />
          <OrganizationItem />
        </div>

        <p className="text-sm w-[300px] tracking-wider leading-normal">
          Jl. Soekarno Hatta No.530, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286
        </p>

        <div className="flex gap-6">
          <OrganizationItem type="social-media" />
          <OrganizationItem type="social-media" />
          <OrganizationItem type="social-media" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
