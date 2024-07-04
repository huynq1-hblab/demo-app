import React from "react";
import "../styles/Header.css";
import { IoIosClose } from "react-icons/io";
import { BiCopy } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  return (
    <header className="header">
      <div className="user">
        <img
          src="https://s3-alpha-sig.figma.com/img/ac93/9084/ed6e8b63d7f662237b1334b297c78411?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pv0O3TcpOvwBUv97qhqjuqASNAPOLkZqO-URgeoTeCvBFn5j73hwPRWKHPeyCgTuZOuq~hN8TO4tpL93MlrkMH9Ju07kg2DsMdmgE-61N11GW9BKGZBAlQsSJ~kL9effbJNECyLji7cMvSKYeBg1Trz7U3VSZxv8MQ062z-AYDIVmasBNFhMhB8B17U4MrN7BiTqPZnTiOgjMTIXVYvjfQNze8Xn1UK40vTmVwAtpbACE-2qREeCepLaKwsg6FWP~lcz922nUPjkK5JtZYV2wOkRCed-GcO~L0nr~HPpTVCwhGXeNd6JBvTBHa8MtuunUZ~OWMyfDEoJ6E1EA~AUNQ__"
          alt="Avatar"
          className="avatar"
        />
        <div className="user-info">
          <div className="user-account">
            <h1>@Vitalik</h1>
            <p>0xF8d...A82B</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/fe34/e334/f1f91248567cd7b4c749e21f8a999510?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~-EPiaie3HrXj84anPBdhVQNCnvgwKSFvI58b3Fyz4bHLukSvApreCc~ek1jm4ZeSC2w4QPc~TWUOCnwvtsmk96tN9TW9hLhdiKeShyFTDSre5GrzoaKwPqofTUbHUqo2A91Qpq-4KzKTmtLgb16R9gnaabccbvGeV3V1zT7ay4dKUkavySnWzqKjer~qEn8DNkxWZlX0srHlV4XbNzQM~VJWji91yuDbt6DpaymtW04yas9c3BIxBgUMVvZPyzoYDuq~OwW6uLY3PEUSA1KRduUzBzgdmxNxnsB8~NuisWa2BuMCqPy2Ghp-HUNzDkAI~3pYP8-7Zi4caTxwJqlg__"
              alt="Ethereum"
              className="ethereum"
            />
            <div className="icon-copy">
              <BiCopy />
            </div>
          </div>
          <h2>$22,413,887</h2>
          <div className="badge">
            <GoArrowUpRight />
            <span>1.84%</span>
          </div>
        </div>
      </div>
      <div className="left-side">
        <div className="circle-chart">
          <p></p>
        </div>
        <div className="icon-close">
          <IoIosClose />
        </div>
      </div>
    </header>
  );
};

export default Header;
