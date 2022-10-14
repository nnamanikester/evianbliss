import Image from "next/future/image";
import Link from "next/link";
import * as React from "react";
import config from "../../config";

interface OfferProps {}

const Offer: React.FC<OfferProps> = () => {
  return (
    <>
      <div className="offer">
        <div className="offer__image">
          <Image
            placeholder="blur"
            blurDataURL={config.BLUR_URL}
            alt="Google Logo"
            src={require("/public/images/corn-row.jpg")}
            className="offer-image"
          />
        </div>
        <div className="content">
          <h2>GET 10% OFF</h2>
          <h5 className="mb-2">YOUR NEXT HAIR TREATMENT</h5>
          <Link href="/book-appointment">
            <a className="btn btn__primary btn__full-width mb-1">
              Book an Appointment
            </a>
          </Link>
          <a
            href={`tel:${config.PHONE}`}
            className="btn btn__secondary btn__full-width mb-1"
          >
            {config.PHONE}
          </a>

          <p className="text-center">Offer ends November 31, 2022.</p>
        </div>
      </div>
    </>
  );
};

export default Offer;
