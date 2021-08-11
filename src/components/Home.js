import React from "react";
import "./Home.css";
import Row from "./Row";

function Home() {
  return (
    <div className="home">
      <h1 className="home__heading">Recommended for you</h1>
      <div className="home__rows">
        <Row
          title="The Complete 2021 PHP Full Stack Web Developer Bootcamp"
          instructorName="Srinivas Vanamala"
          stars={4.5}
          comments={4167}
          ratings={4.3}
          price="₹588"
          image="https://img-c.udemycdn.com/course/240x135/2488654_e156_3.jpg"
          isBestSeller
        />
        <Row
          title="Python Django 2021 - Complete Course"
          instructorName="Dennis Ivy"
          stars={4.5}
          comments={177}
          ratings={4.7}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/4152006_54df_5.jpg"
          isBestSeller
        />
        <Row
          title="The Complete 2021 Web Development Course - Build 15..."
          instructorName="Development Island (UK)"
          stars={4.5}
          comments={5939}
          ratings={4.5}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/548278_b005_9.jpg"
        />
        <Row
          title="Django with React | An Ecommerce Website"
          instructorName="Dennis Ivy, Brad Traversy"
          stars={4.5}
          comments={801}
          ratings={4.5}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/3792332_8a51_2.jpg"
        />
        <Row
          title="[2021] React Native Made Easy"
          instructorName="Omar Maksousa"
          stars={4.5}
          comments={53}
          ratings={4.6}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/4029024_1ca4_6.jpg"
        />
        <Row
          title="iOS & Swift - The Complete iOS App Development Bootcamp"
          instructorName="Dr. Angela Yu"
          stars={4.5}
          comments={64410}
          ratings={4.8}
          price="₹485"
          image="https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg"
          isBestSeller
        />
        <Row
          title="The Full Stack Web Development"
          instructorName="Eduonix Learning Solutions, Eduonix-Tech ., Samy Eduonix"
          stars={4.5}
          comments={2981}
          ratings={4.4}
          price="₹388"
          image="https://img-c.udemycdn.com/course/240x135/1002676_3c6e_2.jpg"
        />
        <Row
          title="Full Stack Web Development Bootcamp with React and Python"
          instructorName="Bogdan Stashchuk"
          stars={4.5}
          comments={62}
          ratings={4.6}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/3914632_39ed_4.jpg"
        />
        <Row
          title="The Coding Interview Bootcamp: Algorithms + Data Structures"
          instructorName="Stephen Grider"
          stars={4.5}
          comments={12234}
          ratings={4.8}
          price="₹1280"
          image="https://img-c.udemycdn.com/course/240x135/1409142_1879_8.jpg"
          isBestSeller
        />
        <Row
          title="Angular - The Complete Guide (2021 Edition)"
          instructorName="Maximilian Schwarzmüller"
          stars={4.5}
          comments={149709}
          ratings={4.6}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg"
          isBestSeller
        />
        <Row
          title="Vue - The Complete Guide (w/ Router, Vuex, Composition API)"
          instructorName="Maximilian Schwarzmüller"
          stars={4.5}
          comments={4844}
          ratings={4.7}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg"
        />
        <Row
          title="Angular & NodeJS - The MEAN Stack Guide [2021 Edition]"
          instructorName="Maximilian Schwarzmüller"
          stars={4.5}
          comments={20303}
          ratings={4.7}
          price="₹8600"
          image="https://img-c.udemycdn.com/course/240x135/833442_b26e_5.jpg"
        />
        <Row
          title="Python Django - The Practical Guide"
          instructorName="Academind by Maximilian Schwarzmüller, M..."
          stars={4.5}
          comments={1105}
          ratings={4.7}
          price="₹500"
          image="https://img-c.udemycdn.com/course/240x135/4015616_32a9_2.jpg"
        />
        <Row
          title="Build a Backend REST API with Python & Django - Advanced"
          instructorName="Mark Winterbottom, Brooke Rutherford"
          stars={4.5}
          comments={4318}
          ratings={4.6}
          price="₹468"
          image="https://img-c.udemycdn.com/course/240x135/2045310_f8a2_6.jpg"
        />
        <Row
          title="Next JS & Typescript with Shopify Integration - Full Guide"
          instructorName="Eincode by Filip Jerga, Filip Jerga"
          stars={4}
          comments={25}
          ratings={4.1}
          price="₹385"
          image="https://img-c.udemycdn.com/course/240x135/4111264_2104_2.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
