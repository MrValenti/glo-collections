// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Container from "./Container";
import { getData } from "../lib";
import { config } from "../../config";
import { HighlightsType } from "../../type";
import { Link } from "react-router-dom";
import Title from "./Title";
import img1 from "../assets/img/women-3.jpeg"


const Highlights = () => {
    const [highlightsData, setHighlightsData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const endpoint = `${config?.baseUrl}/highlights`;
          try {
            const data = await getData(endpoint);
            setHighlightsData(data);
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
    <div className="text-center w-full">
                        <Title text="New Arrivals" />
                    </div>
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {highlightsData.map((item: HighlightsType) => (
        <div
          key={item?._id}
          className="relative h-60  shadow-md cursor-pointer overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              // backgroundImage: `url(${item?.image})`,
              backgroundImage: img1,
              color: item?.color,
            }}
          ></div>
          <div
            className="relative z-10 p-6 flex flex-col justify-between h-full"
            style={{ color: item?.color }}
          >
            <div>
              <h3 className="text-2xl font-bold max-w-44">{item?.name}</h3>
              <p className="text-base font-bold mt-4">{item?.title}</p>
            </div>
            <Link to={item?._base} className="text-base font-normal">
              {item?.buttonTitle}
            </Link>
          </div>
        </div>
      ))}
    </Container>
    </>
  )
}

export default Highlights