import { MainHeading } from "../MainHeading/MainHeading";
import "./MyWords.css";
import { Images } from "../Images/Images";

export const MyWords = () => {
  const articleText =
    "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.";

  return (
    <section className="my-words-section">
      <MainHeading className={"heading-text my-words"} text={"My Words"} />
      <div className="my-words-wrapper">
        <div className="article-box">
          <Images />
          <p>July 2023</p>
          <p>{articleText} </p>
          <button className="icon-button read-article">
            <img
              className="icon"
              src="/assets/ReadArticle.svg"
              alt="github icon"
            />
            Read Article
          </button>
        </div>
        <div className="article-box">
          <Images />
          <p>July 2023</p>
          <p>{articleText} </p>
          <button className="icon-button read-article">
            <img
              className="icon"
              src="/assets/ReadArticle.svg"
              alt="github icon"
            />
            Read Article
          </button>
        </div>
        <div className="article-box">
          <Images />
          <p>July 2023</p>
          <p>{articleText} </p>
          <button className="icon-button read-article">
            <img
              className="icon"
              src="/assets/ReadArticle.svg"
              alt="github icon"
            />
            Read Article
          </button>
        </div>
        <div className="article-box">
          <Images />
          <p>July 2023</p>
          <p>{articleText} </p>
          <button className="icon-button read-article">
            <img
              className="icon"
              src="/assets/ReadArticle.svg"
              alt="github icon"
            />
            Read Article
          </button>
        </div>
      </div>
    </section>
  );
};
