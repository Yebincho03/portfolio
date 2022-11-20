import Image from "next/image";
import { globalColor, DescriptiveText } from "../../shared/Style.js";
import styled from "styled-components";
import ProjectDetail from "./ProjectDetail";
import courtImg from "../../public/images/courte-image2.png";
import picbeakImg from "../../public/images/picbeak-image2.png";
import scaveImg from "../../public/images/scave-image.png";

const DetailContainer = () => {
  return (
    <div>
      <ProjectDetail
        projectTitle="Courte"
        link="https://github.com/Gavriil84/Team-SpaceDuck-Frontend"
        projectHeadline="Mobile Application"
        projectImage={courtImg}
        projectDescription="Courte is a mobile application that offers a comprehensive
        solution to facilitate the use and sharing of public tennis
        courts by enabling users to find the closest parks with
        available courts, manage queues and connect with nearby users to
        play together. As a front-end developer, I used React Native
        with Expo along with the Native Base component library to build
        Courte. I displayed dynamic park data pulled from MongoDB via
        GraphQL queries on the landing page."
        team="This project was created from concept to delivery in just 12
        weeks, this would not have been possible without such a
        talented team. Thank you to our UI/UX designer Bruna Weiss and
        to fellow developers Gabriel Watanabe, Jaspreet Bhatti, Mizuho
        Tohma, Gustavo Monte and Olivia Underdah for making Courte possible!"
        tech="React Native, JavaScript, Expo, Firebase Authentication, Google Auth, GraphQL"
      />
      <ProjectDetail
        projectTitle="Picbeak"
        link="https://github.com/ijaspreetbhatti/Team-Loon-Picbeak-Frontend"
        projectHeadline="Full Stack Wep App"
        projectImage={picbeakImg}
        projectDescription="www.picbeak.com is a youth-focused web application that provides educational information about 
        region-specific bird species. Users can identify birds they spot in the wild and add them to their personal 
        virtual Beakpedia collection to track their progress and unlock new features.
        Picbeak was built with React and the site is hosted with Heroku. As a front-end developer,
         I developed stateful and streamlined front-end React functional components and interfaced with REST APIs 
        via Axios requests to access and display dynamic data for users"
        team="In just 12 weeks, this project was created from concept to launch. Thank you to our UI/UX designer Bruna Weiss and to fellow developers Gabriel Watanabe, Jaspreet Bhatti, Mizuho Tohma, and Olivia Underdah!"
        tech="React.js, JavaScript, REST APIs, Express.js, Mongoose, Node.js, MongoDB Atlas, Sass, Git, Heroku"
      />
      <ProjectDetail
        projectTitle="Scave"
        link="https://github.com/ijaspreetbhatti/Team-Magpie-Scave"
        projectHeadline="Progressive Web App"
        projectImage={scaveImg}
        projectDescription="Scave is a location-based progressive web application that utilizes Google Maps JavaScript API along with geo-location services and Firebase Firestore to facilitate the donation and pick-up of goods within communities. Users can create an account and post items for donation and/or explore items in their area to pick up and claim. As a developer on this project I integrated user authentication with Firebase Authentication with the login and sign-up flow. Additionally, I display my list Items page utilizing HTML, CSS, and JavaScript"
        team="In just 12 weeks, this project was created from concept to launch. Thank you to our UI/UX designer Bruna Weiss and to fellow developers Gabriel Watanabe, Jaspreet Bhatti, Mizuho Tohma, and Olivia Underdah!"
        tech="JavaScript, jQuery, HTML, Google Maps, Firebase Authentication, Firebase Firestore, Sass, Webpack, Git"
      />
    </div>
  );
};

export default DetailContainer;
