import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const styles = {
  container: {
    wrap: "wrap",
    spacing: 2,
    justify: "center",
  },
  paper: {
    padding: 2,
    margin: 10,
    width: "35%",
    cursor: "pointer",
    borderRadius: 10,
  },
};

const OtherArticles = ({ otherArticles }) => {
  return (
    <>
      <div>
        <h2 variant="h4" className="heading">
          Top Stories
        </h2>
      </div>
      <Grid container justify="center" style={styles.container}>
        {otherArticles.map((result, index) => {
          return (
            <Paper
              key={index}
              variant="outlined"
              square={true}
              style={styles.paper}
              onClick={() => {
                window.open(otherArticles.url);
              }}
            >
              <div>
                {result.media ? (
                  result.media.map((img, index) => {
                    return (
                      <img
                        key={index}
                        src={img["media-metadata"][2].url}
                        width="100%"
                      />
                    );
                  })
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "293px",
                      textAlign: "center",
                    }}
                  >
                    <p>Image not available for this article...</p>
                  </div>
                )}
              </div>
              <Typography variant="h5" align="center" color="initial">
                {result.title}
              </Typography>
              <Typography variant="body1">{result.abstract}</Typography>
              <Typography variant="caption">
                {result.byline} {"-"} {result.source}
              </Typography>
            </Paper>
          );
        })}
      </Grid>
    </>
  );
};

export default OtherArticles;
