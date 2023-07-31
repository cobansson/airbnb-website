import heroImg from "./images/hero-images/hero-img.png";
import Card from "./Card";
import cardData from "./Data";

export default function Main() {
  const cardEl = cardData.map((lesson) => {
    return <Card key={lesson.id} {...lesson} />;
  });

  return (
    <main>
      <div className="main-container">
        <div className="hero-img-container">
          <img src={heroImg} className="hero-img" />
        </div>
        <div className="main-title-container">
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by</p>
          <span> one-of-a-kind hosts—all without leaving</span>
          <span> home.</span>
        </div>
        <ul>{cardEl}</ul>
      </div>
    </main>
  );
}
