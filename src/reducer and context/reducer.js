const reducer = (state, action) => {
  switch (action.type) {
    case "SET-BOOK-NAME":
      return { ...state, bookName: action.payload };

      break;
    case "TOGGLE-SIDEBAR":
      return { ...state, openSidebar: !state.openSidebar };

      break;
    case "SET-CURRENT-USER":
      return { ...state, currentUser: action.payload };
      break;

    case "INSTALL-SEARCH-BOOKS":
      const temp2 = action.payload.items;
      const temp = temp2.length;
      const newHai = temp2.map((s) => {
        if (!s.volumeInfo.imageLinks) {
          var img =
            "https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";
        } else {
          img = s.volumeInfo.imageLinks.thumbnail;
        }
        return {
          id: s.id,
          selfLink: s.selfLink,
          title: s.volumeInfo.title,
          author: s.volumeInfo.authors,
          desc: s.volumeInfo.description,
          published: s.volumeInfo.publishedDate,
          img: img,
        };
      });
      return {
        ...state,
        searchLoading: false,
        searchBookInfo: {
          totalItem: temp,
          books: newHai,
        },
      };
  }
};
export default reducer;
