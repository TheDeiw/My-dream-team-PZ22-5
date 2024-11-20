import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
         <img src={"/avatar-cheh.png"} alt="Dmytro Chekhovskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Dmytro Chekhovskyi</h2>
          <p style={styles.position}>Project Manager</p>
      </div>
      </div>
   <div style={styles.card}>
        <img src={"/Yanush.png"} alt="Yanush Volodya" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Yanush Volodya</h2>
          <p style={styles.position}>Fullstack engineer</p>
 </div>
 </div>
<div style={styles.card}>
<img src={"/photo_5325650960917325998_x.jpg"} alt="Fedorchuk Roman" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Fedorchuk Roman</h2>
          <p style={styles.position}>Buisness Analysyst</p>
        </div>
      </div>
      <div style={styles.card}>
<img src={"/photo_2024-11-20_14-13-13.jpg"} alt="Shala Maksym" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Shala Maksym</h2>
          <p style={styles.position}>DevOps</p>
        </div>
      </div>
      <img src={"/Chepeliuk.jpg"} alt="Mariia Chepeliuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mariia Chepeliuk</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
