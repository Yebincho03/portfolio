import Image from "next/image";
import { globalColor, DescriptiveText } from "../../shared/Style.js";
import styled from "styled-components";
import ProjectDetail from "./ProjectDetail";
import courtImg from "../../public/images/courte-image2.png";
import picbeakImg from "../../public/images/picbeak-image2.png";

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
        GraphQL queries on the landing page.

        This project was created from concept to delivery in just 12
        weeks, this would not have been possible without such a
        talented team. Thank you to our UI/UX designer Bruna Weiss and
        to fellow developers Gabriel Watanabe, Jaspreet Bhatti, Mizuho
        Tohma, Gustavo Monte and Yebin Cho for making Courte possible!"
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
      />
    </div>
  );
};

export default DetailContainer;
