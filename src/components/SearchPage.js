import React from "react";
import SearchHeader from "./SearchHeader";
import "./SearchPage.css";
import SearchRow from "./SearchRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <SearchHeader />
      <SearchRow
        image="https://img-c.udemycdn.com/course/240x135/692188_9da7_21.jpg"
        title="The Python Mega Course: Build 10 Real World Applications"
        price="₹8,640"
        info="Go from zero to hero in Python in weeks! Learn Python the easy way by building real-life Python programs!"
        instructor="Ardit Sulce"
        rating="4.6"
        stars="4.5"
        reviews="52,485"
        hours="33.5"
        lectures="343"
        type="All Levels"
        isBestSeller
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/629302_8a2d_2.jpg"
        title="Learn Python Programming Masterclass"
        info="This Python For Beginners Course Teaches You The Python Language Fast. Includes Online Training With Python "
        instructor="Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy"
        rating="4.5"
        stars="4.5"
        reviews="81,101"
        hours="67"
        lectures="492"
        type="All Levels"
        price="₹8640"
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/666914_6c60_3.jpg"
        title="Python for Beginners: Learn Python Programming (Python 3)"
        info="Learn  Programming the Easy Way, Complete with Examples, Quizzes, Exercises and more. Learn Python 2 and Python 3 "
        instructor="Jason Cannon"
        rating="4.5"
        stars="4.5"
        reviews="19,171"
        hours="3"
        lectures="78"
        type="All Levels"
        price="₹9,280"
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/1547268_1b84_3.jpg"
        title="The Complete Python Course | Learn Python by Doing"
        info="Go from Beginner to Expert in Python by building projects. The best investment for your Python journey!"
        instructor="Codestars by Rob Percival, Jose Salvatierra, Rob Percival, Teclado by Jose Salvatierra"
        rating="4.6"
        stars="4.5"
        reviews="15,228"
        hours="35.5"
        lectures="343"
        type="All Levels"
        price="₹9,200"
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/1035472_23ce_5.jpg"
        title="Python for Finance: Investment Fundamentals & Data Analytics"
        info="Learn Python Programming and Conduct Real-World Financial Analysis in Python - Complete Python Training"
        instructor="365 Careers"
        rating="4.6"
        stars="4.5"
        reviews="22,830"
        hours="8.5"
        lectures="111"
        type="All Levels"
        price="₹9,280"
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/903378_f32d_7.jpg"
        title="The Python Bible™ | Everything You Need to Program in Python"
        info="Build 11 Projects and go from Beginner to Pro in Python with the World's Most Fun Project-Based Python Courses!"
        instructor="Ziyad Yehia, Internet of Things Academy"
        rating="4.6"
        stars="4.5"
        reviews="34,810"
        hours="9"
        lectures="74"
        type="Beginner"
        price="₹494"
        isBestSeller
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/2776760_f176_6.jpg"
        title="100 Days of Code - The Complete Python Pro Bootcamp for 2021"
        info="Master Python by building 100 projects in 100 days. Learn to build websites, games, apps, plus scraping and data science"
        instructor="Dr. Angela Yu"
        rating="4.7"
        stars="4.5"
        reviews="49,938"
        hours="63.5"
        lectures="675"
        type="All Levels"
        price="₹595"
        isBestSeller
      />
      <SearchRow
        image="https://img-c.udemycdn.com/course/480x270/577248_3b6f_13.jpg"
        title="Python for Beginners with Examples"
        info="A Python course for the busy ones to learn Python programming. Learn and practice Python by building two complete apps. "
        instructor="Ardit Sulce"
        rating="4.4"
        stars="4.5"
        reviews="9,054"
        hours="4.5"
        lectures="84"
        type="Beginner"
        price="₹494"
      />
    </div>
  );
}

export default SearchPage;
