import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book); //  status 200 means success;
  } catch (error) {
    console.log("error:", error);
    res.status(500).json(error); // 500 status means internal server error;
  }
};
