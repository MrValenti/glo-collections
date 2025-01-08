import Container from "./Container"
import { useEffect, useState } from "react";
import { config } from '../../config';
import { getData } from "../lib";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../type";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/categories`;
            try {
                const data = await getData(endpoint);
                setCategories(data);

            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);
    return (
        <Container>
            <div className="mb-10">
                <div className="flex justify-between">
                    <div className="text-center w-full">
                        <Title text="Featured Categories" />
                    </div>                    
                </div>
                <div className="w-full h-[1px] bg-gray-200 mt-3" />
            </div>



            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                {categories.map((item: CategoryProps) => (
                    <Link
                        to={`/category/${item?._base}`}
                        key={item?._id}
                        className="w-full relative group overflow-hidden"
                    >
                        <img
                            src={item?.image}
                            alt="categoryImage"
                            className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
                        />
                        <div className="absolute bottom-3 w-full text-center">
                            <p className="text-sm md:text-base font-bold">{item?.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>

    )
}

export default Categories