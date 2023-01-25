import React from "react";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from '@/app.module.scss'


function App() {
  return (
    <div className={`d_flex flex_column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>


  );
}

export default App;
