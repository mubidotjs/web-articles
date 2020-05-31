import React from "react";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  // content: {
  //   width: "40%",
  //   display: "flex",
  //   margin: 10,
  // },
  paper: {
    width: "40%",
    margin: 10,
    padding: "2px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const Main = ({ popularArticles }) => {
  return (
    <>
      <div>
        <h2 className="heading">Most Popular Articles</h2>
      </div>
      <Grid container justify="center" style={styles.container}>
        {popularArticles.map((article, index) => {
          return (
            <Paper
              className="article-container"
              elevation={3}
              variant="outlined"
              style={styles.paper}
              key={index}
              onClick={() => {
                window.open(article.url);
              }}
            >
              <img
                src={article.multimedia[0].url}
                alt="top-article"
                width="100%"
                height="340px"
              />
              <h2>{article.title}</h2>
              <p>{article.abstract}</p>
            </Paper>
          );
        })}
      </Grid>
    </>
  );
};

export default Main;
