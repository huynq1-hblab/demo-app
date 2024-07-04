import React, { useState } from "react";
import "../styles/Header.css";
import { IoIosClose } from "react-icons/io";
import { BiCopy } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import ReactApexChart from "react-apexcharts";

const Header = () => {
  const [options] = useState({
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -115,
        endAngle: 115,
        hollow: {
          margin: 0,
          size: "75%",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#1C1C1C",
          strokeWidth: "100%",
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.95,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            fontSize: "12px",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "5",
          },
          value: {
            formatter(val) {
              return parseInt(1000*val/100);
            },
            color: "#fff",
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 1,
        gradientToColors: ["#ACFD00"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Excellent"],
  });

  const [series] = useState([86]);
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
          <div id="card">
            <div id="chart">
              <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="icon-close">
          <IoIosClose size={60} />
        </div>
      </div>
    </header>
  );
};

export default Header;
