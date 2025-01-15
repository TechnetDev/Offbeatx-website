"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading("");
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleOpenArticle = (article) => {
    setIsArticleVisible(true);
    setArticle(article);

    setTimeout(() => {
      setTimeoutState(true);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(true);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(false);

    setTimeout(() => {
      setTimeoutState(false);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(false);
      setArticle("");
    }, 350);
  };

  return (
    <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
      <div>
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg" />
      </div>
    </div>
  );
};

export default Home;
