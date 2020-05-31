import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Books = ({ bookReview }) => {
  const lists = bookReview.lists;

  return (
    <>
      <div>
        <h2 className="heading">Books Reviews</h2>
      </div>
      <Grid container className="books-container" justify="center">
        {lists &&
          lists.map((list, index) => {
            return (
              <Grid
                item
                key={index}
                style={{
                  width: "360px",
                  margin: 30,
                  padding: 2,
                  alignItems: "center",
                }}
              >
                {list.books.map((book, index) => {
                  return (
                    <Paper
                      elevation={3}
                      variant="outlined"
                      xs={5}
                      key={index}
                      onClick={() => window.open(book.amazon_product_url)}
                      style={{ cursor: "pointer", margin: 10 }}
                    >
                      <div style={{ minHeight: "100px" }}>
                        <img
                          src={book.book_image}
                          alt="book"
                          width="328"
                          height="500px"
                        />
                        <h4>{"Title: " + book.title}</h4>
                        <h6>{"Author: " + book.author}</h6>
                        <p>{book.description}</p>
                      </div>
                    </Paper>
                  );
                })}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Books;
