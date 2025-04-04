import React from "react";
import Button from "../Elements/Button";
import PremiumContent from "../Fragments/PremiumContent";

const Premium = () => {
  return (
    <section className="flex justify-center items-center bg-blue-300 min-h-screen w-full">
      <div>
        <div className="flex justify-center items-center text-center text-2xl text-white py-8 font-bold">
          <h3>Various kinds of premium cards</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center ">
          <PremiumContent
            title={"Class Underatted"}
            Details={"Details"}
            checkOut={"BuY Now"}
            description={
              "Kartu premium ini memang paling murah di kelasnya, tapi tetap memberikan berbagai benefit yang menarik. Dengan kartu ini, saya bisa menikmati diskon khusus, akses layanan eksklusif, dan berbagai promo yang nggak tersedia untuk kartu biasa. Jadi meskipun harganya lebih terjangkau, manfaatnya tetap terasa premium!"
            }
            img={
              "https://img.freepik.com/free-vector/cute-astronaut-samurai-with-kitsune-mask-katana-sword-cartoon-vector-icon-illustration-science_138676-9360.jpg?t=st=1743668929~exp=1743672529~hmac=ad09939d9cd097a17fe31da9fbb9854b36ecf66d6e3541ec0c5f08e8de651d85&w=900"
            }
          ></PremiumContent>
          <PremiumContent
            title={"Class Exclusive"}
            Details={"Details"}
            checkOut={"BuY Now"}
            description={
              "Kartu premium tingkat menengah yang memberikan akses lebih banyak ke layanan eksklusif. Cocok untuk pengguna yang ingin menikmati pengalaman premium dengan harga yang masih terjangkau."
            }
            img={
              "https://img.freepik.com/free-vector/hand-drawn-anime-coloring-pages-illustration_52683-160570.jpg?t=st=1743670937~exp=1743674537~hmac=0be6bb2b3c9d1b976511a659f34d2d3bd3eccd45d9e8102344e756d964e5ac06&w=900"
            }
          ></PremiumContent>
          <PremiumContent
            title={"Class Ultimate"}
            Details={"Details"}
            checkOut={"BuY Now"}
            description={
              "Kartu premium paling tinggi di kelasnya dengan akses penuh ke semua fitur eksklusif. Ideal untuk pengguna yang ingin pengalaman tanpa batas."
            }
            img={
              "https://img.freepik.com/free-vector/hand-drawn-anime-kawaii-illustration_52683-123303.jpg?ga=GA1.1.273677528.1711904364&semt=ais_hybrid"
            }
          ></PremiumContent>
        </div>
      </div>
    </section>
  );
};

export default Premium;
