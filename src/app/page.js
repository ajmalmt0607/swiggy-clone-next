import MindSlider from "@/components/Home/MindSlider";
import RestaurantsList from "@/components/Home/RestaurantsList";
import TopRestaurants from "@/components/Home/TopRestaurants";
import Footer from "@/components/Home/footer";
import React from "react";

const Home = () => {
    return (
        <>
            <MindSlider />
            <TopRestaurants />
            <RestaurantsList />
            <Footer />
        </>
    );
};

export default Home;
