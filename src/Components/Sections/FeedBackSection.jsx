import { useState } from "react";
import feedbacks from "../../Data/feedbackData";
import '../../CSS/feedbacksection.css'

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevFeedback = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? feedbacks.length - 1 : prev - 1
    );
  };

  const nextFeedback = () => {
    setCurrentIndex((prev) =>
      prev === feedbacks.length - 1 ? 0 : prev + 1
    );
  };

  const { title, comment, name, image } = feedbacks[currentIndex];

  return (
    <section className="feedback-section">
      {/* Left Side: Text */}
      <div className="feedback-left">
        <div className="feedback-stars" aria-hidden="true">✦ ✦ ✦ ✦ ✦</div>
        <h1 className="feedback-title">"{title}"</h1>
        <p className="feedback-comment">{comment}</p>
        <p className="feedback-name">{name}</p>

        <div className="feedback-buttons">
          <button onClick={prevFeedback}>&lt;</button>
          <button onClick={nextFeedback}>&gt;</button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="feedback-right">
        <img
          src={image}
          alt={name}
          className="feedback-image"
          key={currentIndex} // triggers re-render animation
        />
      </div>
    </section>
  );
}
