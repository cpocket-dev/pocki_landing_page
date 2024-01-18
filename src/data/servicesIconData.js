import Document from "../assets/animatedIcons/document.json";
import Document2 from "../assets/animatedIcons/document2.json";
import Location from "../assets/animatedIcons/location.json";
import Home from "../assets/animatedIcons/home.json";
import Consultation from "../assets/animatedIcons/consultation.json";
import Camera from "../assets/animatedIcons/camera.json";
import Photo from "../assets/animatedIcons/photo.json";
import Ticket from "../assets/animatedIcons/ticket.json";
import Work from "../assets/animatedIcons/work.json";
import News from "../assets/animatedIcons/news.json";
import Warning from "../assets/animatedIcons/warning.json";
import Book from "../assets/animatedIcons/book.json";
import Question from "../assets/animatedIcons/question.json";
import Calendar from "../assets/animatedIcons/calendar.json";
import Travel from "../assets/animatedIcons/travel.json";
import Clock from "../assets/animatedIcons/clock.json";
import Stars from "../assets/animatedIcons/stars.json";
import Vote from "../assets/animatedIcons/vote.json";

export const getAnimationData = (name) => {
    switch (name) {
      case "Document":
        return Document;
      case "Document2":
        return Document2;
      case "Vote":
        return Vote;
      case "Stars":
        return Stars;
      case "Clock":
        return Clock;
      case "Travel":
        return Travel;
      case "Location":
        return Location;
      case "Home":
        return Home;
      case "Consultation":
        return Consultation;
      case "Camera":
        return Camera;
      case "Photo":
        return Photo;
      case "Ticket":
        return Ticket;
      case "Work":
        return Work;
      case "News":
        return News;
      case "Warning":
        return Warning;
      case "Book":
        return Book;
      case "Question":
        return Question;
      case "Calendar":
        return Calendar;
      default:
        return Document;
    }
  };